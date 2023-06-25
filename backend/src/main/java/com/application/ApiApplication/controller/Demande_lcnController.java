package com.application.ApiApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.application.ApiApplication.model.demande_lcn;
import com.application.ApiApplication.services.Demande_lcnService;

@RestController
@CrossOrigin
@RequestMapping("/demande_lcn")
public class Demande_lcnController {

    @Autowired
    private Demande_lcnService apiService;

    @GetMapping
    public List<demande_lcn> getAllApis() {
        return apiService.getAllApis();
    }

    @GetMapping("/{id}")
    public demande_lcn getApiById(@PathVariable String _id) {
        return apiService.getApiById(_id);
    }
    @PostMapping("/batch")
    public List<demande_lcn> createApis(@RequestBody List<demande_lcn> apis) {
        return apiService.createApis(apis);
    }

    @PutMapping
    public demande_lcn updateApi(@RequestBody demande_lcn api) {
        return apiService.updateApi(api);
    }

    @DeleteMapping("/{id}")
    public void deleteApiById(@PathVariable String _id) {
        apiService.deleteApiById(_id);
    }

}
