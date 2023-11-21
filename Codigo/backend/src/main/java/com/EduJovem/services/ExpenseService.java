package com.EduJovem.services;

import com.EduJovem.models.Expense;
import com.EduJovem.repository.ExpenseRepository;
import com.EduJovem.services.authentication.AuthenticationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {


    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private ExpenseRepository expenseRepository;

    public ResponseEntity<?> addDespesa(Expense expense){
        return authenticationService.addDespesa(expense);
    }

    public List<Expense> getAllDespesas(){
        return expenseRepository.findAll();
    }

}
