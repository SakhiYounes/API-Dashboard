package com.application.ApiApplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.ApiApplication.model.daba_daba;
import com.application.ApiApplication.repository.Daba_dabaRepository;

@Service
public class Daba_dabaService {

    @Autowired
    private Daba_dabaRepository apiRepository;

    public List<daba_daba> createApis(List<daba_daba> apis) {
        return apiRepository.saveAll(apis);
    }

    public List<daba_daba> getAllApis() {
        return apiRepository.findAll();
    }

    public daba_daba getApiById(String _id) {
        return apiRepository.findById(_id).orElse(null);
    }

    public void deleteApiById(String _id) {
        apiRepository.deleteById(_id);
    }

    public daba_daba updateApi(daba_daba api) {
        return apiRepository.save(api);
    }

}
