package com.EduJovem.services;

import java.util.List;

import com.EduJovem.services.authentication.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.EduJovem.models.Expense;
import com.EduJovem.repository.ExpenseRepository;

@Service
public class ExpenseServices {
    @Autowired
    private ExpenseRepository expRepository;
    @Autowired
    private AuthenticationService authenticationService;

    public List<Expense> getAll() {
		return expRepository.findAll();
	}

    public ResponseEntity<?> addExpense(Expense exp){
        return authenticationService.addExpenses(exp);
    }
}
