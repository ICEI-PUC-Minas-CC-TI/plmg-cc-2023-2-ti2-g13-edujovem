package com.EduJovem.services;

import com.EduJovem.models.Expense;
import com.EduJovem.repository.ExpenseRepository;
import com.EduJovem.services.authentication.AuthenticationService;

import com.EduJovem.services.exceptions.DatabaseException;
import com.EduJovem.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {


    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private ExpenseRepository expenseRepository;

    public ResponseEntity<?> addExpense(Expense expense){
        return authenticationService.addExpense(expense);
    }

    public List<Expense> getAllExpense(){
        return expenseRepository.findAll();
    }

    public ResponseEntity<Void> deleteExpese(Integer id) {
        try {
            expenseRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException(id);
        }catch(DataIntegrityViolationException e){
            throw new DatabaseException(e.getMessage());
        }
    }
    
}
