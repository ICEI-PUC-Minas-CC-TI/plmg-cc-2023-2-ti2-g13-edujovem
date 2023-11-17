package com.EduJovem.services;

import java.util.List;

import com.EduJovem.models.Nivel;
import com.EduJovem.services.authentication.AuthenticationService;
import org.jetbrains.annotations.NotNull;
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
    @Autowired
    private AuthenticationService authenticationService;

    public Expense addExpenseToUser(User user, @NotNull Expense expense) {

        expense.setUser(user);
        Expense savedExpense = expRepository.save(expense);

        return savedExpense;
    }

    public List<Expense> getExpensesByUser(User user) {
        
        return expRepository.findByUser(user);
    }

    public Expense addExpense(Expense expense) {
        Expense savedExpense = expRepository.save(expense);
        return savedExpense;
    }

    public ResponseEntity<?> addDispesa(Expense expense) {
        return authenticationService.addDispesa(expense);
    }
    
}
