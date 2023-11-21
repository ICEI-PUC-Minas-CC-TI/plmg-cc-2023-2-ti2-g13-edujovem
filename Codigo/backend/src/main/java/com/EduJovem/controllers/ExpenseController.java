package com.EduJovem.controllers;

import com.EduJovem.models.Expense;

import com.EduJovem.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expense")
@CrossOrigin("*")

public class ExpenseController{

    @Autowired
    private ExpenseService expenseService;
    @GetMapping("/testaExpense")
    public String helloMundoController(){
        return "Despesa access level";
    }



    @PostMapping("/addExpense")
    public ResponseEntity<?> addDespesas(@RequestBody Expense expense){
        return expenseService.addDespesa(expense);
    }

    @GetMapping("/listarExpense")
    public List<Expense> getAllDespesas(){
        return expenseService.getAllDespesas();
    }



}
