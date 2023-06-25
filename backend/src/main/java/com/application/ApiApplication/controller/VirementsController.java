package com.application.ApiApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.application.ApiApplication.model.virements;
import com.application.ApiApplication.services.VirementsService;

@RestController
@CrossOrigin
@RequestMapping("/virements")
public class VirementsController {

    @Autowired
    private VirementsService apiService;

    @GetMapping
    public List<virements> getAllApis() {
        return apiService.getAllApis();
    }

    @GetMapping("/{id}")
    public virements getApiById(@PathVariable String _id) {
        return apiService.getApiById(_id);
    }
    @PostMapping("/batch")
    public List<virements> createApis(@RequestBody List<virements> apis) {
        return apiService.createApis(apis);
    }

    @PutMapping
    public virements updateApi(@RequestBody virements api) {
        return apiService.updateApi(api);
    }

    @DeleteMapping("/{id}")
    public void deleteApiById(@PathVariable String _id) {
        apiService.deleteApiById(_id);
    }

}
