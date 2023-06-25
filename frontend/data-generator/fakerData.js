const fs = require('fs');
const Chance = require('chance');

const chance = new Chance();


// Define a function to generate random data for each model
function generateDataForModel(modelName) {
  switch (modelName) {
    case 'virements':
    return {
      canal: chance.pickone(['mbanking', 'ebanking']),
      date: chance.date({string:true, year: 2022}),
      num_compte: chance.natural({min: 100000000, max: 999999999}),
      num_tiers: chance.natural({min: 100000000, max: 999999999}),
      marche: chance.pickone(['Particulier', 'Professionnel','TPE']),
      reference: chance.natural({min: 100000000, max: 999999999}),
      statut: chance.pickone(['succes', 'echec']),
      userIP: chance.ip(),
      motif_rejet: chance.sentence(),
      montant: chance.natural({max: 999999}),
      };
    case 'paiement_facture_recharge':
      return {
        canal: chance.pickone(['mbanking', 'ebanking']),
        date: chance.date({string:true, year: 2022}),
        num_compte: chance.natural({min: 100000000, max: 999999999}),
        num_tiers: chance.natural({min: 100000000, max: 999999999}),
        marche: chance.pickone(['Particulier', 'Professionnel','TPE']),
        reference: chance.natural({min: 100000000, max: 999999999}),
        statut: chance.pickone(['succes', 'echec']),
        userIP: chance.ip(),
        motif_echec: chance.sentence(),
        facturier: chance.word(),
        service: chance.word(),
        montant: chance.natural({min: 10, max: 3000}),
      };
    case 'daba_daba':
      return {
        canal: chance.pickone(['mbanking', 'ebanking']),
        date: chance.date({string:true, year: 2022}),
        num_compte: chance.natural({min: 100000000, max: 999999999}),
        num_tiers: chance.natural({min: 100000000, max: 999999999}),
        marche: chance.pickone(['Particulier', 'Professionnel','TPE']),
        reference: chance.natural({min: 100000000, max: 999999999}),
        statut: chance.pickone(['succes', 'echec']),
        userIP: chance.ip(),
        motif_echec: chance.sentence(),
        montant_recharge: chance.natural({min: 10, max: 3000}),
      };
    case 'connexion':
      return {
        canal: chance.pickone(['mbanking', 'ebanking']),
        date: chance.date({string:true, year: 2022}),
        num_compte: chance.natural({min: 100000000, max: 999999999}),
        num_tiers: chance.natural({min: 100000000, max: 999999999}),
        marche: chance.pickone(['Particulier', 'Professionnel','TPE']),
        reference: chance.natural({min: 100000000, max: 999999999}),
        statut: chance.pickone(['succes', 'echec']),
        userIP: chance.ip(),
        motif: chance.sentence(),
      };
    case 'demande_chequier':
      return {
        canal: chance.pickone(['mbanking', 'ebanking']),
        date: chance.date({string:true, year: 2022}),
        num_compte: chance.natural({min: 100000000, max: 999999999}),
        num_tiers: chance.natural({min: 100000000, max: 999999999}),
        marche: chance.pickone(['Particulier', 'Professionnel','TPE']),
        reference: chance.natural({min: 100000000, max: 999999999}),
        format: chance.pickone([25, 50]),
        userIP: chance.ip(),
        reference_chequier: chance.natural({min: 100000000, max: 999999999}),
        option: chance.pickone(['barré', 'non endossable','normal']),
      };
    case 'demande_lcn':
      return {
        canal: chance.pickone(['mbanking', 'ebanking']),
        date: chance.date({string:true, year: 2022}),
        num_compte: chance.natural({min: 100000000, max: 999999999}),
        num_tiers: chance.natural({min: 100000000, max: 999999999}),
        marche: chance.pickone(['Particulier', 'Professionnel','TPE']),
        reference: chance.natural({min: 100000000, max: 999999999}),
        statut: chance.pickone(['succes', 'echec']),
        userIP: chance.ip(),
        format_lcn: chance.pickone([25, 50]),
        reference_lcn: chance.natural({min: 100000000, max: 999999999}),
      };
    case 'opposition_carte':
      return {
        canal: chance.pickone(['mbanking', 'ebanking']),
        date: chance.date({string:true, year: 2022}),
        num_compte: chance.natural({min: 100000000, max: 999999999}),
        num_tiers: chance.natural({min: 100000000, max: 999999999}),
        num_carte: chance.natural({min: 100000000, max: 999999999}),
        marche: chance.pickone(['Particulier', 'Professionnel','TPE']),
        reference: chance.natural({min: 100000000, max: 999999999}),
        statut: chance.pickone(['succes', 'echec']),
        userIP: chance.ip(),
        motif: chance.sentence(),
        motif_echec: chance.sentence(),
      };
    default:
      throw new Error(`Invalid model name: ${modelName}`);
  }
}

const models = ['virements', 'paiement_facture_recharge', 'daba_daba', 'connexion', 'demande_chequier', 'demande_lcn', 'opposition_carte'];


for (const modelName of models) {
  const modelData = [];
  for (let i = 0; i < 1000; i++) {
    const item = generateDataForModel(modelName);
    modelData.push(item);
  }
  const jsonData = JSON.stringify(modelData, null, 2);
  fs.writeFileSync(`./${modelName}.json`, jsonData);
  console.log(`Data generated and saved to ${modelName}.json`);
}


