package com.application.ApiApplication.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.application.ApiApplication.model.traceParameters;

@Repository
public interface TraceparametersRepository extends MongoRepository<traceParameters, String> {

}