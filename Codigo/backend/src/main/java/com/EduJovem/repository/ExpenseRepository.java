package com.EduJovem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.EduJovem.models.Expense;
import com.EduJovem.models.User;

import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Integer>{
    @Query("SELECT e FROM Expense e WHERE e.user = :user")
    List<Expense> findByUser(@Param("user") User user);
}
