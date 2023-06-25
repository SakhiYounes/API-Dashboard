// src/dataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  allData: any;
  opposition_carte: any;
  daba_daba: any;
  connexion: any;
  facture_recharge:any;
  demande_chequier: any;
  demande_lcn: any;
  virement: any;
  apiData: any;
}

const initialState: DataState = {
  allData: null,
  opposition_carte: null,
  daba_daba: null,
  connexion: null,
  facture_recharge: null,
  demande_chequier: null,
  demande_lcn: null,
  virement: null,
  apiData: null
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setAllData: (state, action: PayloadAction<any>) => {
      state.allData = action.payload;
    },
    setConnexionData: (state, action: PayloadAction<any>) => {
      state.connexion = action.payload;
    },
    setVirementData: (state, action: PayloadAction<any>) => {
      state.virement = action.payload;
    },
    setFacture_rechargeData: (state, action: PayloadAction<any>) => {
      state.facture_recharge = action.payload;
    },
    setDaba_dabaData: (state, action: PayloadAction<any>) => {
      state.daba_daba = action.payload;
    },
    setDemande_chequierData: (state, action: PayloadAction<any>) => {
      state.demande_chequier = action.payload;
    },
    setDemande_lcnData: (state, action: PayloadAction<any>) => {
      state.demande_lcn = action.payload;
    },
    setOpposition_carteData: (state, action: PayloadAction<any>) => {
      state.opposition_carte = action.payload;
    },
    setApiData: (state, action: PayloadAction<any>) => {
      state.apiData = action.payload;
    },
  },
});

export const { setAllData, setConnexionData, setVirementData,setFacture_rechargeData, setDaba_dabaData, 
  setDemande_chequierData,setDemande_lcnData, setOpposition_carteData, setApiData
   } = dataSlice.actions;

export default dataSlice.reducer;
