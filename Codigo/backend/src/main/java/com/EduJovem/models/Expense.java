package com.EduJovem.models;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ID;
    private Instant moment;
    private String theme;

    private Double valuessss;


    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    public Instant getMoment() {
        return moment;
    }

    public void setMoment(Instant moment) {
        this.moment = moment;
    }

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }
    public String getTheme() {
        return theme;
    }
    public void setTheme(String tema) {
        this.theme = tema;
    }
    public Double getValue() {
        return valuessss;
    }
    public void setValue(Double valor) {
        this.valuessss = valor;
    }

}

