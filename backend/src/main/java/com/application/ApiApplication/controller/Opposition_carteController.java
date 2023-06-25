package com.application.ApiApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.application.ApiApplication.model.opposition_carte;
import com.application.ApiApplication.services.Opposition_carteService;

@RestController
@CrossOrigin
@RequestMapping("/opposition_carte")
public class Opposition_carteController {

    @Autowired
    private Opposition_carteService apiService;

    @GetMapping
    public List<opposition_carte> getAllApis() {
        return apiService.getAllApis();
    }

    @GetMapping("/{id}")
    public opposition_carte getApiById(@PathVariable String _id) {
        return apiService.getApiById(_id);
    }
    @PostMapping("/batch")
    public List<opposition_carte> createApis(@RequestBody List<opposition_carte> apis) {
        return apiService.createApis(apis);
    }

    @PutMapping
    public opposition_carte updateApi(@RequestBody opposition_carte api) {
        return apiService.updateApi(api);
    }

    @DeleteMapping("/{id}")
    public void deleteApiById(@PathVariable String _id) {
        apiService.deleteApiById(_id);
    }

}
