package com.application.ApiApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.application.ApiApplication.model.paiement_facture_recharge;
import com.application.ApiApplication.services.Paiement_facture_rechargeService;

@RestController
@CrossOrigin
@RequestMapping("/facture_recharge")
public class Paiement_facture_rechargeController {

    @Autowired
    private Paiement_facture_rechargeService apiService;

    @GetMapping
    public List<paiement_facture_recharge> getAllApis() {
        return apiService.getAllApis();
    }

    @GetMapping("/{id}")
    public paiement_facture_recharge getApiById(@PathVariable String _id) {
        return apiService.getApiById(_id);
    }
    @PostMapping("/batch")
    public List<paiement_facture_recharge> createApis(@RequestBody List<paiement_facture_recharge> apis) {
        return apiService.createApis(apis);
    }

    @PutMapping
    public paiement_facture_recharge updateApi(@RequestBody paiement_facture_recharge api) {
        return apiService.updateApi(api);
    }

    @DeleteMapping("/{id}")
    public void deleteApiById(@PathVariable String _id) {
        apiService.deleteApiById(_id);
    }

}
