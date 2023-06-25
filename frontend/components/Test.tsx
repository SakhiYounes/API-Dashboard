import { useState, useEffect } from 'react';
import styles from './RawData.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { fetchConnexion, fetchDabaDaba, fetchDemandeChequier, fetchDemandeLcn, fetchOppositionCarte, fetchPaiementFactureRechargeData, fetchVirementsData } from '@/services/apiData';


const Test = () => {


  useEffect(() => {
    const getData = async () => {
        const virement = await fetchVirementsData();
        const connexion = await fetchConnexion();
        const facture_recharge = await fetchPaiementFactureRechargeData();
        const daba_daba = await fetchDabaDaba();
        const demande_chequier = await fetchDemandeChequier();
        const demande_lcn = await fetchDemandeLcn();
        const opposition_carte = await fetchOppositionCarte();
        const data = [ 
            ...virement , 
            ...connexion ,
            ...facture_recharge,
            ...daba_daba,
            ...demande_chequier,
            ...demande_lcn,
            ...opposition_carte
        ];
        console.log(data)
    }
     getData();
  }, []);



  

  return (<div/>)

};

export default Test;


