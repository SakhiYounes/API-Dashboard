package com.application.ApiApplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.ApiApplication.model.opposition_carte;
import com.application.ApiApplication.repository.Opposition_carteRepository;

@Service
public class Opposition_carteService {

    @Autowired
    private Opposition_carteRepository apiRepository;

    public List<opposition_carte> createApis(List<opposition_carte> apis) {
        return apiRepository.saveAll(apis);
    }

    public List<opposition_carte> getAllApis() {
        return apiRepository.findAll();
    }

    public opposition_carte getApiById(String _id) {
        return apiRepository.findById(_id).orElse(null);
    }

    public void deleteApiById(String _id) {
        apiRepository.deleteById(_id);
    }

    public opposition_carte updateApi(opposition_carte api) {
        return apiRepository.save(api);
    }

}
