package com.EduJovem.models;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;


@Entity
@Table(name="caderno")
public class Caderno {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private Integer month;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "caderno")
    private List<Expense> expenses = new ArrayList<>();

    public User getUser(){
        return user;
    }

    public Integer getId(){
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }
    public Integer getMonth(){
        return month;
    }
    public void setMonth(Integer month){
        this.month = month;
    }
    
}
