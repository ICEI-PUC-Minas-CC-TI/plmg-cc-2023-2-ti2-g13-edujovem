package com.EduJovem.models;

import jakarta.persistence.*;

@Entity
@Table(name="niveis")
public class Nivel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private int numero;
    private Integer pontuacao;

    // n niveis tem um mundo
    @ManyToOne
    @JoinColumn(name="mundo_id")
    private Mundo mundo;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public Integer getPontuacao() {
        return pontuacao;
    }

    public void setPontuacao(Integer pontuacao) {
        this.pontuacao = pontuacao;
    }

    
}
