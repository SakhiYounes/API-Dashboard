package com.application.ApiApplication.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.application.ApiApplication.model.connexion;


@Repository
public interface ConnexionRepository extends MongoRepository<connexion, String> {

}