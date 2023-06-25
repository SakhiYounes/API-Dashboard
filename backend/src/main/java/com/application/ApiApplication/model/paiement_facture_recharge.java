package com.application.ApiApplication.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "paiement_facture_recharge")
public class paiement_facture_recharge {
    
    @Id
    private String _id;

    private String canal;

    private String date;

    private Integer num_compte;

    private String num_tiers;

    private String marche;

    private String reference;

    private String facturier;

    private String service;

    private String userIP;

    private String statut;
    
    private Integer montant; 

    private String motif_echec;


    public paiement_facture_recharge(String _id, String canal, String date, Integer num_compte, String num_tiers, String marche, String reference, String facturier, String service, String userIP, String statut, Integer montant, String motif_echec) {
        this._id = _id;
        this.canal = canal;
        this.date = date;
        this.num_compte = num_compte;
        this.num_tiers = num_tiers;
        this.marche = marche;
        this.reference = reference;
        this.facturier = facturier;
        this.service = service;
        this.userIP = userIP;
        this.statut = statut;
        this.montant = montant;
        this.motif_echec = motif_echec;
    }

    public String get_id() {
        return this._id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getCanal() {
        return this.canal;
    }

    public void setCanal(String canal) {
        this.canal = canal;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getNum_compte() {
        return this.num_compte;
    }

    public void setNum_compte(Integer num_compte) {
        this.num_compte = num_compte;
    }

    public String getNum_tiers() {
        return this.num_tiers;
    }

    public void setNum_tiers(String num_tiers) {
        this.num_tiers = num_tiers;
    }

    public String getMarche() {
        return this.marche;
    }

    public void setMarche(String marche) {
        this.marche = marche;
    }

    public String getReference() {
        return this.reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getFacturier() {
        return this.facturier;
    }

    public void setFacturier(String facturier) {
        this.facturier = facturier;
    }

    public String getService() {
        return this.service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getUserIP() {
        return this.userIP;
    }

    public void setUserIP(String userIP) {
        this.userIP = userIP;
    }

    public String getStatut() {
        return this.statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public Integer getMontant() {
        return this.montant;
    }

    public void setMontant(Integer montant) {
        this.montant = montant;
    }

    public String getMotif_echec() {
        return this.motif_echec;
    }

    public void setMotif_echec(String motif_echec) {
        this.motif_echec = motif_echec;
    }

}
