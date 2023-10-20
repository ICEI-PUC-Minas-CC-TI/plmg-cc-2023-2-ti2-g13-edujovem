package com.EduJovem.models;

import jakarta.persistence.*;

import java.util.List;

@Entity

public class Mundo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ID;
    private String name;

    //@OneToMany
    //private List<Nivel> niveis;
    public String getNome() {
        return name;
    }

    public void setNome(String nome) {
        this.name = nome;
    }

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }


}

