package com.EduJovem.repository;

import com.EduJovem.models.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Integer> {

    Optional<Expense> findByTheme(String theme);

    List<Expense> findByOrderByValuessss();

}


