package com.EduJovem.models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="mundos")
public class Mundo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ID;
    private String name;
    private String theme;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy="mundo")
    private List<Nivel> niveis = new ArrayList<>();

    public String getName() {
        return name;
    }

    public void setName(String nome) {
        this.name = nome;
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

