package com.EduJovem.models;

import jakarta.persistence.*;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="expenses")
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ID;
    private Instant moment;
    private String theme;
    private Float value;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    public Instant getMoment() {
        return moment;
    }

    public void setMoment(String nome) {
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


}

