import Sidebar from '@/components/Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import styles from './styles/dashboard.module.css';
import { useSelector } from 'react-redux';
import ConnectionPieChart from '@/components/Dashboard/ConnectionPieChart';
import TransactionsBarChart from '@/components/Dashboard/TransactionsBarChart';
import RequestsPerServiceChart from '@/components/Dashboard/RequestsPerServiceChart ';
import GenericBarChart from '@/components/Dashboard/GenericBarChart';
import GenericPieChart from '@/components/Dashboard/GenericPieChart';
import GenericLineChart from '@/components/Dashboard/GenericLineChart';
import PowerBI from '@/components/Dashboard/PowerBI';


  interface DataCardProps {
    title: string;
    value: any;
    children?: React.ReactNode;
  }
  
  const DataCard: React.FC<DataCardProps> = ({ title, children }) => {
    return (
      <>
        <h3>{title}</h3>
        <div className={styles.chart_container}>{children}</div>
      </>
    );
  };  


  interface DashboardPageProps {
      data: any;
    }

const DashboardPage = ({ data }: DashboardPageProps) => {
    const connexion = useSelector((state: any) => state.data.connexion);
    const daba_daba = useSelector((state: any) => state.data.daba_daba);
    const demande_chequier = useSelector((state: any) => state.data.demande_chequier);
    const demande_lcn = useSelector((state: any) => state.data.demande_lcn);
    const opposition_carte = useSelector((state: any) => state.data.opposition_carte);
    const facture_recharge = useSelector((state: any) => state.data.facture_recharge);
    const virement = useSelector((state: any) => state.data.virement);


    const combinedData = [
      ...connexion,
      ...daba_daba,
      ...demande_chequier,
      ...demande_lcn,
      ...opposition_carte,
      ...facture_recharge,
      ...virement
    ];

    // Replace the following sample data with real data calculations from your Redux store
    const totalConnections = connexion.length;
    const totalRecharges = daba_daba.length;
    const totalChequeRequests = demande_chequier.length;
    const totalLcnRequests = demande_lcn.length;
    const totalCardBlocks = opposition_carte.length;
    const totalPayments = facture_recharge.length;
    const totalTransfers = virement.length;


    // Total
    const totalOfTotals = totalConnections+
                          totalRecharges +
                          totalChequeRequests +
                          totalLcnRequests +
                          totalCardBlocks +
                          totalPayments +
                          totalTransfers

    // Total of success and failed operations 

    const totalSuccess = combinedData.filter((item) => item.statut === "succes").length;
    const totalEchec = combinedData.filter((item) => item.statut === "echec").length;

    // Total of those who use mobile and those who use web

    const totalWeb = combinedData.filter((item) => item.canal === "ebanking").length;
    const totalMobile = combinedData.filter((item) => item.canal === "mbanking").length;

    // Date Function
    const parseDate = (dateString: string): Date => {
      const [month, day, year] = dateString.split('/');
      return new Date(Number(year), Number(month) - 1, Number(day));
    };

    // Connection pie chart data
    const successfulConnections = connexion.filter((c: any) => c.statut === 'succes').length;
    const failedConnections = connexion.filter((c: any) => c.statut === 'echec').length;

    const connectionPieChartData = [
      { name: 'Successful Connections', value: successfulConnections },
      { name: 'Failed Connections', value: failedConnections },
    ];

    // Calculate transactions per channel
  const transactionsPerChannel = connexion.reduce((acc: any, c: any) => {
    if (!acc[c.canal]) {
      acc[c.canal] = 0;
    }
    acc[c.canal]++;
    return acc;
  }, {});

  const transactionsBarChartData = Object.entries(transactionsPerChannel).map(([name, transactions]) => ({
    name,
    value: transactions as number,
  }));
  

  //requests per service

  const requestsPerService = {
    demande_chequier: demande_chequier.length,
    demande_lcn: demande_lcn.length,
    opposition_carte: opposition_carte.length,
    paiement_facture_recharge: facture_recharge.length,
    virement: virement.length,
  };
  
  const requestsPerServiceData = Object.entries(requestsPerService).map(([service, count]) => ({
    service,
    count,
  }));

  // Graph 4: Recharge Amounts per Service
  const rechargeAmountsPerService = facture_recharge.reduce((acc: any, d: any) => {
    if (!acc[d.service]) {
      acc[d.service] = 0;
    }
    acc[d.service] += d.montant;
    return acc;
  }, {});

  const rechargeAmountsPerServiceData = Object.entries(rechargeAmountsPerService).map(([name, amount]) => ({
    name,
    value: amount,
  }));

  // Graph 5: Number of Cheque Requests per Format
  const chequeRequestsPerFormat = demande_chequier.reduce((acc: any, r: any) => {
    if (!acc[r.format]) {
      acc[r.format] = 0;
    }
    acc[r.format]++;
    return acc;
  }, {});

  const chequeRequestsPerFormatData = Object.entries(chequeRequestsPerFormat).map(([name, count]) => ({
    name,
    value: count,
  }));

  // Graph 14: Successful and Failed Payments per Facturier
  const paymentsPerFacturier = facture_recharge.reduce((acc: any, p: any) => {
    if (!acc[p.facturier]) {
      acc[p.facturier] = { successful: 0, failed: 0 };
    }
    if (p.statut === 'succes') {
      acc[p.facturier].successful++;
    } else if (p.statut === 'echec') {
      acc[p.facturier].failed++;
    }
    return acc;
  }, {});

  const paymentsPerFacturierData = Object.entries(paymentsPerFacturier).map(([name, { successful, failed }]) => ({
    name,
    Successful: successful,
    Failed: failed,
  }));

  const combinedPaymentsPerFacturierData = paymentsPerFacturierData.map(({ name, Successful, Failed }) => (
    {
    name,
    type: 'Failed',
    value: Failed,
  }));

  // Graph 15: Successful and Failed Virements
  const successfulVirements = virement.filter((v: any) => v.statut === 'succes').length;
  const failedVirements = virement.filter((v: any) => v.statut === 'echec').length;

  const virementsStatusData = [
    { name: 'Successful Virements', value: successfulVirements },
    { name: 'Failed Virements', value: failedVirements },
  ];

  // Graph 17: Total transferred amount over time (line chart or area chart) (from virement)
  const virementTotalAmounts = virement.reduce((acc: any, curr: any) => {
    const parsedDate = parseDate(curr.date);
    const dateKey = parsedDate.getTime(); // use timestamp as key
    if (!acc[dateKey]) {
      acc[dateKey] = { date: parsedDate, total: 0 };
    }
    acc[dateKey].total += curr.montant;
    return acc;
  }, {});

  const virementTotalAmountsData = Object.values(virementTotalAmounts).sort((a, b) => a.date.getTime() - b.date.getTime());

  // Graph 7 Calculate demande_chequier requests by channel
  const demandeChequierByChannel = demande_chequier.reduce((acc: any, curr: any) => {
    if (!acc[curr.canal]) {
      acc[curr.canal] = 0;
    }
    acc[curr.canal]++;
    return acc;
  }, {});

  // Convert to data for pie chart
  const demandeChequierByChannelData = Object.entries(demandeChequierByChannel).map(([name, value]) => ({
    name,
    value,
  }));

  // Graph 8 Calculate demande_chequier requests by format
  const demandeChequierByFormat = demande_chequier.reduce((acc: any, curr: any) => {
    if (!acc[curr.format]) {
      acc[curr.format] = 0;
    }
    acc[curr.format]++;
    return acc;
  }, {});

  // Convert to data for pie chart
  const demandeChequierByFormatData = Object.entries(demandeChequierByFormat).map(([name, value]) => ({
    name,
    value,
  }));


  // Graph 9: LCN requests by channel
  const lcnByChannel = demande_lcn.reduce((acc: any, l: any) => {
    if (!acc[l.canal]) {
      acc[l.canal] = 0;
    }
    acc[l.canal]++;
    return acc;
  }, {});

  const lcnByChannelData = Object.entries(lcnByChannel).map(([name, value]) => ({ name, value }));

  // Graph 10: LCN requests by status
  const lcnByStatus = demande_lcn.reduce((acc: any, l: any) => {
    if (!acc[l.statut]) {
      acc[l.statut] = 0;
    }
    acc[l.statut]++;
    return acc;
  }, {});

  const lcnByStatusData = Object.entries(lcnByStatus).map(([name, value]) => ({ name, value }));

  // Graph 11: Card oppositions by channel
  const oppositionByChannelData = Object.entries(opposition_carte.reduce((acc: any, curr: any) => {
    if (!acc[curr.canal]) {
      acc[curr.canal] = 0;
    }
    acc[curr.canal]++;
    return acc;
  }, {})).map(([name, value]) => ({ name, value }));

  // Graph 12: Card oppositions by reason
  const oppositionByReasonData = Object.entries(opposition_carte.reduce((acc: any, curr: any) => {
    if (!acc[curr.motif]) {
      acc[curr.motif] = 0;
    }
    acc[curr.motif]++;
    return acc;
  }, {})).map(([name, value]) => ({ name, value }));
    



return (
  <div className={styles.container}>
    <div className={styles.sidebar}>
      <Sidebar />
    </div>
    <div className={styles.dashboard_content}>
    </div>
  </div>
);

}    

export default DashboardPage;