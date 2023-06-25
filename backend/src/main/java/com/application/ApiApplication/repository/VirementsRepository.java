package com.application.ApiApplication.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.application.ApiApplication.model.virements;

@Repository
public interface VirementsRepository extends MongoRepository<virements, String> {

}