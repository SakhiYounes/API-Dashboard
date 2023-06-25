package com.application.ApiApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.application.ApiApplication.model.demande_chequier;
import com.application.ApiApplication.services.Demande_chequierService;

@RestController
@CrossOrigin
@RequestMapping("/demande_chequier")
public class Demande_chequierController {

    @Autowired
    private Demande_chequierService apiService;

    @GetMapping
    public List<demande_chequier> getAllApis() {
        return apiService.getAllApis();
    }

    @GetMapping("/{id}")
    public demande_chequier getApiById(@PathVariable String _id) {
        return apiService.getApiById(_id);
    }
    @PostMapping("/batch")
    public List<demande_chequier> createApis(@RequestBody List<demande_chequier> apis) {
        return apiService.createApis(apis);
    }

    @PutMapping
    public demande_chequier updateApi(@RequestBody demande_chequier api) {
        return apiService.updateApi(api);
    }

    @DeleteMapping("/{id}")
    public void deleteApiById(@PathVariable String _id) {
        apiService.deleteApiById(_id);
    }

}
