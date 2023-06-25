package com.application.ApiApplication.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "traceParameters")
public class traceParameters {
    
    @Id
    private String _id;

    private String inputString;

    private String outpuString;

    public String get_id() {
        return this._id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getInputString() {
        return this.inputString;
    }

    public void setInputString(String inputString) {
        this.inputString = inputString;
    }

    public String getOutpuString() {
        return this.outpuString;
    }

    public void setOutpuString(String outpuString) {
        this.outpuString = outpuString;
    }


}