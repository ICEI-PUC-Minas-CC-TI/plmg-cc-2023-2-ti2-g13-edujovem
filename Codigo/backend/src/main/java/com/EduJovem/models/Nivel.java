package com.EduJovem.models;

import jakarta.persistence.*;

@Entity
public class Nivel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ID;

    private int numero;
    private Integer pontuacoa;
    @ManyToOne
    private Mundo mundo;

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public Integer getPontuacoa() {
        return pontuacoa;
    }

    public void setPontuacoa(Integer pontuacoa) {
        this.pontuacoa = pontuacoa;
    }

    public Mundo getMundo() {
        return mundo;
    }

    public void setMundo(Mundo mundo) {
        this.mundo = mundo;
    }
}
