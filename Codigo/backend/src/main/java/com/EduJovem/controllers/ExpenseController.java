package com.EduJovem.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EduJovem.models.Expense;
import com.EduJovem.models.User;
import com.EduJovem.services.ExpenseServices;

@RestController
@RequestMapping("/expenses")
public class ExpenseController {

    @Autowired
    private ExpenseServices expenseService;

    
    @GetMapping("/getAll")
    public ResponseEntity<List<Expense>> getAllExpenses(@RequestBody User user) {
        List<Expense> expenses = expenseService.getExpensesByUser(user);
        return ResponseEntity.ok(expenses);
    }

    @PostMapping("/addExpenses")
    public ResponseEntity<Expense> addExpense(@RequestBody Expense expense, @RequestBody User user) {
        Expense savedExpense = expenseService.addExpenseToUser(user, expense);
        return ResponseEntity.ok(savedExpense);
    }
}
