package com.application.ApiApplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.ApiApplication.model.paiement_facture_recharge;
import com.application.ApiApplication.repository.Paiement_facture_rechargeRepository;

@Service
public class Paiement_facture_rechargeService {

    @Autowired
    private Paiement_facture_rechargeRepository apiRepository;

    public List<paiement_facture_recharge> createApis(List<paiement_facture_recharge> apis) {
        return apiRepository.saveAll(apis);
    }

    public List<paiement_facture_recharge> getAllApis() {
        return apiRepository.findAll();
    }

    public paiement_facture_recharge getApiById(String _id) {
        return apiRepository.findById(_id).orElse(null);
    }

    public void deleteApiById(String _id) {
        apiRepository.deleteById(_id);
    }

    public paiement_facture_recharge updateApi(paiement_facture_recharge api) {
        return apiRepository.save(api);
    }

}
