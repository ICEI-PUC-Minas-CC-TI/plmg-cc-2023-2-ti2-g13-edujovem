package com.EduJovem.Edujovem.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_mundo")
public class Mundo {
    @Id
    @GeneratedValue
    private Long id;
    private String nome;
    private String tema;
    @OneToOne  //deixei temporariamente
    @JoinColumn(name = "codigoUser", referencedColumnName = "id")
    private Fase fase;

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
    public void setTema(String tema) {
        this.tema = tema;
    }
    public String gettema() {
        return tema;
    }
    public Fase getFase() {
        return fase;
    }
    public void setFase(Fase fase) {
        this.fase = fase;
    }
}
