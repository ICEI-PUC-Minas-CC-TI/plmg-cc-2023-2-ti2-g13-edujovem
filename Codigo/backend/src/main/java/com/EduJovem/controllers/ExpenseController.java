package com.EduJovem.controllers;

import com.EduJovem.models.Expense;

import com.EduJovem.repository.ExpenseRepository;
import com.EduJovem.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/expenses")
@CrossOrigin("*")

public class ExpenseController{

    @Autowired
    private ExpenseService expenseService;
    @Autowired
    private ExpenseRepository expenseRepository;
    @GetMapping("/testaExpense")
    public String helloMundoController(){
        return "Despesa access level";
    }



    @PostMapping("/addExpense")
    public ResponseEntity<?> addExpense(@RequestBody Expense expense){
        return expenseService.addExpense(expense);
    }

    @GetMapping("/listarExpense")
    public List<Expense> getAllExpenses(){
        return expenseService.getAllExpense();
    }

    @GetMapping("/ordenarExpenses")
    public List<Expense> ordenarPorValor(){
        return expenseRepository.findByOrderByValuessss();
    }
    @GetMapping("/totalExpenses")
    public Double totalExpenses(){
        double sum = 0;
        List<Expense> total = expenseService.getAllExpense();
        for(Expense e: total){
            sum+= e.getValue();
        }
        return sum;

    }



}
