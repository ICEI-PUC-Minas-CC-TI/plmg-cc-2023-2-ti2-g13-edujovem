package com.EduJovem.Edujovem.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "usuario")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    //@OneToOne  //deixei temporariamente
    //@JoinColumn(name = "codigoMundo", referencedColumnName = "id")
    //private Mundo mundo;


}
