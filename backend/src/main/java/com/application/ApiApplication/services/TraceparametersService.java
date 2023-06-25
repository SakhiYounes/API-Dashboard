package com.application.ApiApplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.ApiApplication.model.traceParameters;
import com.application.ApiApplication.repository.TraceparametersRepository;

@Service
public class TraceparametersService {

    @Autowired
    private TraceparametersRepository apiRepository;

    public List<traceParameters> createApis(List<traceParameters> apis) {
        return apiRepository.saveAll(apis);
    }

    public traceParameters createApi(String input, String output) {
        traceParameters api = new traceParameters();
        api.setInputString(input);
        api.setOutpuString(output);
    
        return apiRepository.save(api);
    }

    public List<traceParameters> getAllApis() {
        return apiRepository.findAll();
    }

    public traceParameters getApiById(String _id) {
        return apiRepository.findById(_id).orElse(null);
    }

    public void deleteApiById(String _id) {
        apiRepository.deleteById(_id);
    }

    public traceParameters updateApi(traceParameters api) {
        return apiRepository.save(api);
    }
}
