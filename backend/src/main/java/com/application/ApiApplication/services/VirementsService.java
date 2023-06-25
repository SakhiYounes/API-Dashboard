package com.application.ApiApplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.ApiApplication.model.virements;
import com.application.ApiApplication.repository.VirementsRepository;

@Service
public class VirementsService {

    @Autowired
    private VirementsRepository apiRepository;

    public List<virements> createApis(List<virements> apis) {
        return apiRepository.saveAll(apis);
    }

    public List<virements> getAllApis() {
        return apiRepository.findAll();
    }

    public virements getApiById(String _id) {
        return apiRepository.findById(_id).orElse(null);
    }

    public void deleteApiById(String _id) {
        apiRepository.deleteById(_id);
    }

    public virements updateApi(virements api) {
        return apiRepository.save(api);
    }
}
