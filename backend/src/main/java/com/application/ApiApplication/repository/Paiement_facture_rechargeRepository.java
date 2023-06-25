package com.application.ApiApplication.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.application.ApiApplication.model.paiement_facture_recharge;

@Repository
public interface Paiement_facture_rechargeRepository extends MongoRepository<paiement_facture_recharge, String> {

}