package com.application.ApiApplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.ApiApplication.model.connexion;
import com.application.ApiApplication.repository.ConnexionRepository;

@Service
public class ConnexionService {

    @Autowired
    private ConnexionRepository apiRepository;

    public List<connexion> createApis(List<connexion> apis) {
        return apiRepository.saveAll(apis);
    }

    public List<connexion> getAllApis() {
        return apiRepository.findAll();
    }

    public connexion getApiById(String _id) {
        return apiRepository.findById(_id).orElse(null);
    }

    public void deleteApiById(String _id) {
        apiRepository.deleteById(_id);
    }

    public connexion updateApi(connexion api) {
        return apiRepository.save(api);
    }

}
