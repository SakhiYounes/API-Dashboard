package com.application.ApiApplication.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.application.ApiApplication.model.daba_daba;

@Repository
public interface Daba_dabaRepository extends MongoRepository<daba_daba, String> {

}