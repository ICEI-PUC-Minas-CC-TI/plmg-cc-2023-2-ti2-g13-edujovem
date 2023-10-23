package com.EduJovem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.EduJovem.models.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Integer>{
    
}
