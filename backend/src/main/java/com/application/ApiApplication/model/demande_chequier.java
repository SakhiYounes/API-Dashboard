package com.application.ApiApplication.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "demande_chequier")
public class demande_chequier {
    
    @Id
    private String _id;

    private String canal;

    private String date;

    private Integer num_compte;

    private String num_tiers;

    private String marche;

    private String reference;

    private String format;

    private String userIP;
    
    private String option; 

    private String reference_chequier;

    public demande_chequier(String _id, String canal, String date, Integer num_compte, String num_tiers, String marche, String reference, String format, String userIP, String option, String reference_chequier) {
        this._id = _id;
        this.canal = canal;
        this.date = date;
        this.num_compte = num_compte;
        this.num_tiers = num_tiers;
        this.marche = marche;
        this.reference = reference;
        this.format = format;
        this.userIP = userIP;
        this.option = option;
        this.reference_chequier = reference_chequier;
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

    public String getFormat() {
        return this.format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public String getUserIP() {
        return this.userIP;
    }

    public void setUserIP(String userIP) {
        this.userIP = userIP;
    }

    public String getOption() {
        return this.option;
    }

    public void setOption(String option) {
        this.option = option;
    }

    public String getReference_chequier() {
        return this.reference_chequier;
    }

    public void setReference_chequier(String reference_chequier) {
        this.reference_chequier = reference_chequier;
    }

}
