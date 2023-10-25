//package com.EduJovem.models;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.OneToMany;
//
//@Entity
//public class Notebook {
//    @Id
//    @GeneratedValue(strategy=GenerationType.AUTO)
//    private Integer id;
//
//    @Column(unique=true)
//    private Integer month;
//
//    @OneToMany(mappedBy = "notebook", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<Expense> expenses = new ArrayList<>();
//
//    public Notebook() {
//    }
//    public Integer getId() {
//        return id;
//    }
//    public void setId(Integer id) {
//        this.id = id;
//    }
//    public Integer getMonth() {
//        return month;
//    }
//    public void setMonth(Integer month) {
//        this.month = month;
//    }
//
//}
