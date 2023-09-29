package com.EduJovem.Edujovem.model;

import jakarta.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    @OneToOne  //deixei temporariamente
    @JoinColumn(name = "codigoMundo", referencedColumnName = "id")
    private Mundo mundo;

    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getname() {
        return name;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getemail() {
        return email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getpassword() {
        return password;
    }
    public Mundo getMundo() {
        return mundo;
    }
    public void setMundo(Mundo mundo) {
        this.mundo = mundo;
    }
}
