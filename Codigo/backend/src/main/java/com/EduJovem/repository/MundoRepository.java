package com.EduJovem.repository;

import com.EduJovem.models.Mundo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MundoRepository extends JpaRepository<Mundo, Integer> {
}
