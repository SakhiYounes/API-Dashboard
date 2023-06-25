import { useState, useEffect, useCallback  } from 'react';
import styles from './RawData.module.css';
import { FaArrowLeft, FaArrowRight, FaCheck, FaTimes } from 'react-icons/fa';
import { fetchConnexion, fetchDabaDaba, fetchDemandeChequier, fetchDemandeLcn, fetchOppositionCarte, fetchPaiementFactureRechargeData, fetchVirementsData } from '@/services/apiData';
import { useDispatch, useSelector } from 'react-redux';
import { setAllData, setConnexionData,setVirementData, setFacture_rechargeData, setDaba_dabaData, setDemande_chequierData,
  setDemande_lcnData, setOpposition_carteData , setApiData} from '../../src/dataSlice';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
  
import * as XLSX from 'xlsx'




const RawData = ({}) => {

  const dispatch = useDispatch();
  const apiData = useSelector((state:any) => state.data.apiData); 
  const opposition_carte = useSelector((state:any) => state.data.opposition_carte); // Replace 'yourReducer' with the appropriate reducer name
  const daba_daba = useSelector((state:any) => state.data.daba_daba); // Replace 'yourReducer' with the appropriate reducer name
  const connexion = useSelector((state:any) => state.data.connexion); // Replace 'yourReducer' with the appropriate reducer name
  const facture_recharge = useSelector((state:any) => state.data.facture_recharge); // Replace 'yourReducer' with the appropriate reducer name
  const demande_chequier = useSelector((state:any) => state.data.demande_chequier); // Replace 'yourReducer' with the appropriate reducer name
  const demande_lcn = useSelector((state:any) => state.data.demande_lcn); // Replace 'yourReducer' with the appropriate reducer name
  const virement = useSelector((state:any) => state.data.virement); // Replace 'yourReducer' with the appropriate reducer name

  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState(''); 

  const [type, setType] = useState('virement');

  const [filters, setFilters] = useState({});

  const [selectedRows, setSelectedRows] = useState([]);


  const getData = async () => {

    const virement = await fetchVirementsData();
    dispatch(setVirementData(virement))
    dispatch(setApiData(virement));
    setType('virement');

    const connexion = await fetchConnexion();
    dispatch(setConnexionData(connexion))

    const facture_recharge = await fetchPaiementFactureRechargeData();
    dispatch(setFacture_rechargeData(facture_recharge))

    const daba_daba = await fetchDabaDaba();
    dispatch(setDaba_dabaData(daba_daba))

    const demande_chequier = await fetchDemandeChequier();
    dispatch(setDemande_chequierData(demande_chequier))

    const demande_lcn = await fetchDemandeLcn();
    dispatch(setDemande_lcnData(demande_lcn))

    const opposition_carte = await fetchOppositionCarte();
    dispatch(setOpposition_carteData(opposition_carte))

    const newData = {
      virement: virement,
      connexion: connexion,
      facture_recharge: facture_recharge,
      daba_daba: daba_daba,
      demande_chequier: demande_chequier,
      demande_lcn: demande_lcn,
      opposition_carte: opposition_carte,
    };
  
    dispatch(setAllData(newData))
  }

  const handleSelectRow = (event, row) => {
    const checked = event.target.checked;
    if (checked) {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, row]);
    } else {
      setSelectedRows((prevSelectedRows) => prevSelectedRows.filter((r) => r !== row));
    }
  };

  const selectAllRows = () => {
    setSelectedRows(filteredData);
    const checkboxes = document.getElementsByClassName(styles.checkBox);
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
  };

  const unselectAllRows = () => {
    setSelectedRows([]);
    const checkboxes = document.getElementsByClassName(styles.checkBox);
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  };


  useEffect(() => {
    if (!apiData || Object.keys(apiData).length === 0) {
      getData();
    } else {
        dispatch(setApiData(virement))
    }
  }, []);

  
  const getColumnTitles = (type) => {
    switch (type) {
      case 'virement':
        return ['ID', 'Canal', 'Date', 'Numéro du Compte', 'Numéro Tiers', 'Marché', 'Référence', 'User IP', 'Statut','Montant', 'Motif Rejet'];
      case 'connexion':
        return ['ID', 'Canal', 'Date', 'Numéro du Compte', 'Numéro Tiers', 'Marché', 'Référence', 'User IP', 'Statut', 'Motif'];
      case 'daba_daba':
        return ['ID', 'Canal', 'Date', 'Numéro du Compte', 'Numéro Tiers', 'Marché', 'Référence', 'User IP', 'Statut', 'Montant Recharge', 'Motif Echec'];
      case 'demande_lcn':
        return ['ID', 'Canal', 'Date', 'Numéro du Compte', 'Numéro Tiers', 'Marché', 'Référence', 'User IP', 'Statut', 'Format LCN', 'Référence LCN'];
      case 'demande_chequier':
        return ['ID', 'Canal', 'Date', 'Numéro du Compte', 'Numéro Tiers', 'Marché', 'Référence', 'User IP','Option', 'Référence Chéquier'];
      case 'opposition_carte':
        return ['ID', 'Canal', 'Date', 'Numéro du Compte', 'Numéro Tiers', 'Marché', 'Référence', 'User IP', 'Statut', 'Numéro de Carte', 'Motif', 'Motif Echec'];
      case 'facture_recharge':
        return ['ID', 'Canal', 'Date', 'Numéro du Compte', 'Numéro Tiers', 'Marché', 'Référence', 'User IP', 'Statut','Montant', 'Facturier', 'Service', 'Motif Echec'];

      default:
        return [];
    }
  };

    const columnTitles = getColumnTitles(type);


    const handleSelect = (event) => {
      const type = event.target.value;
      setType(type);
      if (type === 'daba_daba') {
        dispatch(setApiData(daba_daba));
      } else if (type === 'virement') {
        dispatch(setApiData(virement));
      } else if (type === 'demande_lcn') {
        dispatch(setApiData(demande_lcn));
      } else if (type === 'demande_chequier') {
        dispatch(setApiData(demande_chequier));
      } else if (type === 'facture_recharge') {
        dispatch(setApiData(facture_recharge));
      } else if (type === 'connexion') {
        dispatch(setApiData(connexion));
      } else if (type === 'opposition_carte') {
        dispatch(setApiData(opposition_carte));
      }
    };

    const handleNextPage = () => {
      if (apiData && apiData.length > page * 15) {
        setPage(page + 1);
      }
    };
    
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };



  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filterOptions = apiData ? Object.keys(apiData[0]) : [];
  
  
  const filterSelects = apiData ? filterOptions.filter(key => key !== "motif_rejet" && key !== "motif_echec" && key !== "motif" && key !== "montant"&& key !== "userIP"&& key !== "_id"&& key !== "montant_recharge"&& key !== "reference"&& key !== "reference_chequier"&& key !== "reference_lcn"&& key !== "num_compte")
  .map((option) => {
    const options = Array.from(new Set(apiData.map(api => api[option]))).map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

    return (
        <div className={styles.filterRowSelect}>
            <label>{option}</label>
            <div className={styles.custom_select} key={option}>
            <select value={filters[option] || ''} onChange={(e) => handleFilterChange(option, e.target.value)}>
              <option value="">All</option>
              {options}
            </select>
          </div>
        </div>
    );
  }) : null;


  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const filteredData = apiData
  ? apiData
      .filter((api) =>
        Object.entries(filters).every(
          ([key, value]) => !value || api[key] === value
        )
      )
      .filter((api) =>
        !searchQuery ||
        Object.values(api).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
  : [];

  console.log(selectedRows)


  const handleDownload = () => {
    // Get the keys of the first row
    const keys = Object.keys(selectedRows[0]);
  
    // Create an array of rows with header
    const rows = [keys, ...selectedRows.map(row => keys.map(key => row[key]))];
  
    // Create a workbook with a single worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Selected Rows');
  
    // Save the workbook as an XLSX file and prompt the user to download it
    XLSX.writeFile(workbook, 'selected_rows.xlsx');
  };
  

  





  return (
    <>
      <div className={styles.tableContainer}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className={styles.searchBar}
          />
          <div className={styles.tableContainer}>
            <table className={styles.table}>
                  <thead className={styles.tableHead}>
                    <tr>
                      <th colSpan={columnTitles.length + 1}>
                        <div className={styles.filterRow}>
                          <div className={styles.filterRowSelect}>
                            <label>API</label>
                            <div className={styles.custom_select}>
                              <select value={type} onChange={handleSelect}>
                                <option value="virement">Virement</option>
                                <option value="connexion">Connexion</option>
                                <option value="facture_recharge">Facture Recharge</option>
                                <option value="daba_daba">Daba Daba</option>
                                <option value="demande_chequier">Demande Chequier</option>
                                <option value="demande_lcn">Demande LCN</option>
                                <option value="opposition_carte">Opposition Carte</option>
                              </select>
                            </div>
                          </div>
                          {filterSelects}
                        </div>
                      </th>
                    </tr>
                  <tr>
                    {columnTitles.map((title) => (
                      <th key={title}>{title}</th>
                    ))}
                    <th>
                      <FaCheck
                        style={{ color: 'green', cursor: 'pointer' }}
                        onClick={selectAllRows}
                      />
                      <FaTimes
                        style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}
                        onClick={unselectAllRows}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {filteredData
                    .slice((page - 1) * 15, page * 15)
                    .map((item) => {
                      if (type === 'virement') {
                        return (
                          <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.canal}</td>
                            <td>{item.date}</td>
                            <td>{item.num_compte}</td>
                            <td>{item.num_tiers}</td>
                            <td>{item.marche}</td>
                            <td>{item.reference}</td>
                            <td>{item.userIP}</td>
                            <td>{item.statut}</td>
                            <td>{item.montant}</td>
                            <td className={styles.description}>{item.motif_rejet}</td>
                            <td>
                              <input type="checkbox" className={styles.checkBox} onChange={(e) => handleSelectRow(e, item)}/>
                            </td>
                          </tr>
                        );
                      } else if (type === 'connexion') {
                        return (
                          <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.canal}</td>
                            <td>{item.date}</td>
                            <td>{item.num_compte}</td>
                            <td>{item.num_tiers}</td>
                            <td>{item.marche}</td>
                            <td>{item.reference}</td>
                            <td>{item.userIP}</td>
                            <td>{item.statut}</td>
                            <td className={styles.description}>{item.motif}</td>
                            <td>
                              <input type="checkbox" className={styles.checkBox} onChange={(e) => handleSelectRow(e, item)}/>
                            </td>
                          </tr>
                        );
                      } else if (type === 'facture_recharge') {
                        return (
                          <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.canal}</td>
                            <td>{item.date}</td>
                            <td>{item.num_compte}</td>
                            <td>{item.num_tiers}</td>
                            <td>{item.marche}</td>
                            <td>{item.reference}</td>
                            <td>{item.userIP}</td>
                            <td>{item.statut}</td>
                            <td>{item.montant}</td>
                            <td>{item.facturier}</td>
                            <td>{item.service}</td>
                            <td className={styles.description}>{item.motif_echec}</td>
                            <td>
                              <input type="checkbox" className={styles.checkBox} onChange={(e) => handleSelectRow(e, item)}/>
                            </td>
                          </tr>
                        );
                      }else if (type === 'daba_daba') {
                        return (
                          <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.canal}</td>
                            <td>{item.date}</td>
                            <td>{item.num_compte}</td>
                            <td>{item.num_tiers}</td>
                            <td>{item.marche}</td>
                            <td>{item.reference}</td>
                            <td>{item.userIP}</td>
                            <td>{item.statut}</td>
                            <td>{item.montant_recharge}</td>
                            <td className={styles.description}>{item.motif_echec}</td>
                            <td>
                              <input type="checkbox" className={styles.checkBox} onChange={(e) => handleSelectRow(e, item)}/>
                            </td>
                          </tr>
                        );
                      }else if (type === 'demande_chequier') {
                        return (
                          <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.canal}</td>
                            <td>{item.date}</td>
                            <td>{item.num_compte}</td>
                            <td>{item.num_tiers}</td>
                            <td>{item.marche}</td>
                            <td>{item.reference}</td>
                            <td>{item.userIP}</td>
                            <td>{item.option}</td>
                            <td>{item.reference_chequier}</td>
                            <td>
                              <input type="checkbox" className={styles.checkBox} onChange={(e) => handleSelectRow(e, item)}/>
                            </td>
                          </tr>
                        );
                      }else if (type === 'demande_lcn') {
                        return (
                          <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.canal}</td>
                            <td>{item.date}</td>
                            <td>{item.num_compte}</td>
                            <td>{item.num_tiers}</td>
                            <td>{item.marche}</td>
                            <td>{item.reference}</td>
                            <td>{item.userIP}</td>
                            <td>{item.statut}</td>
                            <td>{item.format_lcn}</td>
                            <td>{item.reference_lcn}</td>
                            <td>
                              <input type="checkbox" className={styles.checkBox} onChange={(e) => handleSelectRow(e, item)}/>
                            </td>
                          </tr>
                        );
                      }else if (type === 'opposition_carte') {
                        return (
                          <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.canal}</td>
                            <td>{item.date}</td>
                            <td>{item.num_compte}</td>
                            <td>{item.num_tiers}</td>
                            <td>{item.marche}</td>
                            <td>{item.reference}</td>
                            <td>{item.userIP}</td>
                            <td>{item.statut}</td>
                            <td>{item.num_carte}</td>
                            <td className={styles.description}>{item.motif}</td>
                            <td className={styles.description}>{item.motif_echec}</td>
                            <td>
                              <input type="checkbox" className={styles.checkBox} onChange={(e) => handleSelectRow(e, item)}/>
                            </td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                </tbody>
                </table>
              </div>
              <div className={styles.buttonsWrapper}>
              <button className={styles.previousButton} onClick={handlePreviousPage} disabled={page === 1}>
                  <FaArrowLeft />
              </button>
              <button className={styles.nextButton} onClick={handleNextPage} disabled={!apiData || apiData.length <= page * 15}>
                <FaArrowRight />
              </button>
              <button className={styles.downloadButton} onClick={handleDownload}>
                  Download Selected Data
              </button>
          </div>
      </div>
    </>
    )

};

export default RawData;


