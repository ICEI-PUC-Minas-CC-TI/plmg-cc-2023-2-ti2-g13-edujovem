package com.EduJovem.Edujovem.repository;

import com.EduJovem.Edujovem.model.Mundo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface MundoRepository extends JpaRepository<Mundo, Long> {
}