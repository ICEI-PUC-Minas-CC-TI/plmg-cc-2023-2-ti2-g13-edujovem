package com.EduJovem.Edujovem.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_fase")
public class Fase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String numero;

    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getnome() {
        return nome;
    }
    public void setNumero(String numero) {
        this.numero = numero;
    }
    public String getnumero() {
        return numero;
    }

}
