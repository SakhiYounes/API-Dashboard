package com.application.ApiApplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.ApiApplication.model.demande_chequier;
import com.application.ApiApplication.repository.Demande_ChequierRepository;

@Service
public class Demande_chequierService{

    @Autowired
    private Demande_ChequierRepository apiRepository;

    public List<demande_chequier> createApis(List<demande_chequier> apis) {
        return apiRepository.saveAll(apis);
    }

    public List<demande_chequier> getAllApis() {
        return apiRepository.findAll();
    }

    public demande_chequier getApiById(String _id) {
        return apiRepository.findById(_id).orElse(null);
    }

    public void deleteApiById(String _id) {
        apiRepository.deleteById(_id);
    }

    public demande_chequier updateApi(demande_chequier api) {
        return apiRepository.save(api);
    }

}
