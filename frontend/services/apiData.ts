// services/virements.js
export async function fetchVirementsData() {
  try {
    const response = await fetch('http://localhost:8080/virements');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching virements data:', error);
    throw new Error('Error fetching virements data');
  }
}

// services/paiement_facture_recharge.js
export async function fetchPaiementFactureRechargeData() {
  try {
    const response = await fetch('http://localhost:8080/facture_recharge');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching paiement_facture_recharge data:', error);
    throw new Error('Error fetching paiement_facture_recharge data');
  }
}

// services/connexion.js
export async function fetchConnexion() {
  try {
    const response = await fetch('http://localhost:8080/connexion');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching connexion data:', error);
    throw new Error('Error fetching connexion data');
  }
}

// services/demande_chequier.js
export async function fetchDemandeChequier() {
  try {
    const response = await fetch('http://localhost:8080/demande_chequier');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching demande_chequier data:', error);
    throw new Error('Error fetching demande_chequier data');
  }
}

// services/demande_lcn.js
export async function fetchDemandeLcn() {
  try {
    const response = await fetch('http://localhost:8080/demande_lcn');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching demande_lcn data:', error);
    throw new Error('Error fetching demande_lcn data');
  }
}

// services/opposition_carte.js
export async function fetchOppositionCarte() {
  try {
    const response = await fetch('http://localhost:8080/opposition_carte');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching opposition_carte data:', error);
    throw new Error('Error fetching opposition_carte data');
  }
}

// services/daba_daba.js
export async function fetchDabaDaba() {
  try {
    const response = await fetch('http://localhost:8080/daba_daba');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching daba_daba data:', error);
    throw new Error('Error fetching daba_daba data');
  }
}

