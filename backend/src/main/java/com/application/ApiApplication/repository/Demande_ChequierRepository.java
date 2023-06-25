package com.application.ApiApplication.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.application.ApiApplication.model.demande_chequier;

@Repository
public interface Demande_ChequierRepository extends MongoRepository<demande_chequier, String> {

}