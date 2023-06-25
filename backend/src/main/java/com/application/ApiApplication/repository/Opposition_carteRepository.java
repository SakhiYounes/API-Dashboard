package com.application.ApiApplication.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.application.ApiApplication.model.opposition_carte;

@Repository
public interface Opposition_carteRepository extends MongoRepository<opposition_carte, String> {

}