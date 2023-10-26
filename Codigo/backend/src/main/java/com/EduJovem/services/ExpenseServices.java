package com.EduJovem.services;

import java.util.List;

import com.EduJovem.services.authentication.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.EduJovem.models.Expense;
import com.EduJovem.models.User;
import com.EduJovem.repository.ExpenseRepository;

@Service
public class ExpenseServices {
    @Autowired
    private ExpenseRepository expRepository;

    public Expense addExpenseToUser(User user, Expense expense) {

        expense.setUser(user);
        Expense savedExpense = expRepository.save(expense);
        
        return savedExpense;
    }

    public List<Expense> getExpensesByUser(User user) {
        
        return expRepository.findByUser(user);
    }
    
}
