package com.application.ApiApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.application.ApiApplication.model.connexion;
import com.application.ApiApplication.services.ConnexionService;

@RestController
@CrossOrigin
@RequestMapping("/connexion")
public class ConnexionController {

    @Autowired
    private ConnexionService apiService;

    @GetMapping
    public List<connexion> getAllApis() {
        return apiService.getAllApis();
    }

    @GetMapping("/{id}")
    public connexion getApiById(@PathVariable String _id) {
        return apiService.getApiById(_id);
    }
    @PostMapping("/batch")
    public List<connexion> createApis(@RequestBody List<connexion> apis) {
        return apiService.createApis(apis);
    }

    @PutMapping
    public connexion updateApi(@RequestBody connexion api) {
        return apiService.updateApi(api);
    }

    @DeleteMapping("/{id}")
    public void deleteApiById(@PathVariable String _id) {
        apiService.deleteApiById(_id);
    }

}
