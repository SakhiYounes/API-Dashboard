package com.application.ApiApplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.ApiApplication.model.demande_lcn;
import com.application.ApiApplication.repository.Demande_lcnRepository;

@Service
public class Demande_lcnService {

    @Autowired
    private Demande_lcnRepository apiRepository;

    public List<demande_lcn> createApis(List<demande_lcn> apis) {
        return apiRepository.saveAll(apis);
    }

    public List<demande_lcn> getAllApis() {
        return apiRepository.findAll();
    }

    public demande_lcn getApiById(String _id) {
        return apiRepository.findById(_id).orElse(null);
    }

    public void deleteApiById(String _id) {
        apiRepository.deleteById(_id);
    }

    public demande_lcn updateApi(demande_lcn api) {
        return apiRepository.save(api);
    }

}
