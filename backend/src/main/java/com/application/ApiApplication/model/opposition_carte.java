package com.application.ApiApplication.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "opposition_carte")
public class opposition_carte {
    
    @Id
    private String _id;

    private String canal;

    private String date;

    private Integer num_compte;

    private Integer num_carte;

    private String num_tiers;

    private String marche;

    private String reference;

    private String statut;

    private String userIP;
    
    private String motif; 

    private String motif_echec;


    public opposition_carte(String _id, String canal, String date, Integer num_compte, Integer num_carte, String num_tiers, String marche, String reference, String statut, String userIP, String motif, String motif_echec) {
        this._id = _id;
        this.canal = canal;
        this.date = date;
        this.num_compte = num_compte;
        this.num_carte = num_carte;
        this.num_tiers = num_tiers;
        this.marche = marche;
        this.reference = reference;
        this.statut = statut;
        this.userIP = userIP;
        this.motif = motif;
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

    public Integer getNum_carte() {
        return this.num_carte;
    }

    public void setNum_carte(Integer num_carte) {
        this.num_carte = num_carte;
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

    public String getStatut() {
        return this.statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public String getUserIP() {
        return this.userIP;
    }

    public void setUserIP(String userIP) {
        this.userIP = userIP;
    }

    public String getMotif() {
        return this.motif;
    }

    public void setMotif(String motif) {
        this.motif = motif;
    }

    public String getMotif_echec() {
        return this.motif_echec;
    }

    public void setMotif_echec(String motif_echec) {
        this.motif_echec = motif_echec;
    }

}
