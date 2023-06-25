package com.application.ApiApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.application.ApiApplication.model.daba_daba;
import com.application.ApiApplication.services.Daba_dabaService;

@RestController
@CrossOrigin
@RequestMapping("/daba_daba")
public class Daba_dabaController {

    @Autowired
    private Daba_dabaService apiService;

    @GetMapping
    public List<daba_daba> getAllApis() {
        return apiService.getAllApis();
    }

    @GetMapping("/{id}")
    public daba_daba getApiById(@PathVariable String _id) {
        return apiService.getApiById(_id);
    }
    @PostMapping("/batch")
    public List<daba_daba> createApis(@RequestBody List<daba_daba> apis) {
        return apiService.createApis(apis);
    }

    @PutMapping
    public daba_daba updateApi(@RequestBody daba_daba api) {
        return apiService.updateApi(api);
    }

    @DeleteMapping("/{id}")
    public void deleteApiById(@PathVariable String _id) {
        apiService.deleteApiById(_id);
    }

}
