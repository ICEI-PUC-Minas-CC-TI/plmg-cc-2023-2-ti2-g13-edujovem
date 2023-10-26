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
    private String description;
    private Integer category;
    private Double value;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

   

    public Expense(){
    }


    public Expense(Integer id, Instant moment, String description, ExpenseCategory category, Double value) {
        this.id = id;
        this.moment = moment;
        this.description = description;
        setCategory(category);
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
        return description;
    }


    public void setDescription(String description) {
        this.description = description;
    }

    public ExpenseCategory getCategory() {
        return ExpenseCategory.valueOf(category);
    }

    public void setCategory(ExpenseCategory category) {
        if(category != null) {
            this.category = category.getCode();
        }
    }


    public Double getValue() {
        return value;
    }


    public void setValue(Double value) {
        this.value = value;
    }


    public void setCategory(Integer category) {
        this.category = category;
    }


    public User getUser() {
        return user;
    }


    public void setUser(User user) {
        this.user = user;
    }
    
    
}
