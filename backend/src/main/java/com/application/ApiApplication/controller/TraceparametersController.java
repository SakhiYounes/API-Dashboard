package com.application.ApiApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.application.ApiApplication.model.traceParameters;
import com.application.ApiApplication.services.TraceparametersService;

@RestController
@CrossOrigin
@RequestMapping("/traceParameters")
public class TraceparametersController {

    @Autowired
    private TraceparametersService apiService;

    @GetMapping
    public List<traceParameters> getAllApis() {
        return apiService.getAllApis();
    }

    @GetMapping("/{id}")
    public traceParameters getApiById(@PathVariable String _id) {
        return apiService.getApiById(_id);
    }
    @PostMapping("/batch")
    public List<traceParameters> createApis(@RequestBody List<traceParameters> apis) {
        return apiService.createApis(apis);
    }

    @PostMapping("/trace")
    public traceParameters traceParameters(@RequestParam String input, @RequestParam String output) {
        return apiService.createApi(input, output);
    }

    @PutMapping
    public traceParameters updateApi(@RequestBody traceParameters api) {
        return apiService.updateApi(api);
    }

    @DeleteMapping("/{id}")
    public void deleteApiById(@PathVariable String _id) {
        apiService.deleteApiById(_id);
    }

}
