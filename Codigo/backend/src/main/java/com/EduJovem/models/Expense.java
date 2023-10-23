package com.EduJovem.models;

import java.time.Instant;

import com.EduJovem.models.enums.ExpenseCategory;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name="expenses")
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Instant moment;
    private String Description;
    private ExpenseCategory category;
    private Double value;


    @ManyToOne
    @JoinColumn(name="caderno_id")
    private Caderno caderno;

    public Expense(){
    }


    public Expense(Integer id, Instant moment, String description, ExpenseCategory category, Double value) {
        this.id = id;
        this.moment = moment;
        Description = description;
        this.category = category;
        this.value = value;
    }


    public Integer getId() {
        return id;
    }


    public void setId(Integer id) {
        this.id = id;
    }


    public Instant getMoment() {
        return moment;
    }


    public void setMoment(Instant moment) {
        this.moment = moment;
    }


    public String getDescription() {
        return Description;
    }


    public void setDescription(String description) {
        Description = description;
    }


    public ExpenseCategory getCategory() {
        return category;
    }


    public void setCategory(ExpenseCategory category) {
        this.category = category;
    }


    public Double getValue() {
        return value;
    }


    public void setValue(Double value) {
        this.value = value;
    }
    
    
}
