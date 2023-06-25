package com.application.ApiApplication.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "demande_lcn")
public class demande_lcn {
    
    @Id
    private String _id;

    private String canal;

    private String date;

    private Integer num_compte;

    private String num_tiers;

    private String marche;

    private String reference;

    private String statut;

    private String userIP;
    
    private String format_lcn; 

    private String reference_lcn;

    public demande_lcn(String _id, String canal, String date, Integer num_compte, String num_tiers, String marche, String reference, String statut, String userIP, String format_lcn, String reference_lcn) {
        this._id = _id;
        this.canal = canal;
        this.date = date;
        this.num_compte = num_compte;
        this.num_tiers = num_tiers;
        this.marche = marche;
        this.reference = reference;
        this.statut = statut;
        this.userIP = userIP;
        this.format_lcn = format_lcn;
        this.reference_lcn = reference_lcn;
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

    public String getFormat_lcn() {
        return this.format_lcn;
    }

    public void setFormat_lcn(String format_lcn) {
        this.format_lcn = format_lcn;
    }

    public String getReference_lcn() {
        return this.reference_lcn;
    }

    public void setReference_lcn(String reference_lcn) {
        this.reference_lcn = reference_lcn;
    }

}
