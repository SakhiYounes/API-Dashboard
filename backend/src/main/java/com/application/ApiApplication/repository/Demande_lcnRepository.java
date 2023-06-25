package com.application.ApiApplication.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.application.ApiApplication.model.demande_lcn;

@Repository
public interface Demande_lcnRepository extends MongoRepository<demande_lcn, String> {

}