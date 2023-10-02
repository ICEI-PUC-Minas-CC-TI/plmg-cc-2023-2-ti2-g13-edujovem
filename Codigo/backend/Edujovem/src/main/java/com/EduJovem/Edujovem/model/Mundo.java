package com.EduJovem.Edujovem.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_mundo")
@Getter
@Setter
public class Mundo {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String tema;
    @OneToOne  //deixei temporariamente
    @JoinColumn(name = "codigoUser", referencedColumnName = "id")
    private Fase fase;

}
