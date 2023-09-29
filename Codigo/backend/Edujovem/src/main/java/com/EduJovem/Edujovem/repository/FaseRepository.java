package com.EduJovem.Edujovem.repository;

import com.EduJovem.Edujovem.model.Fase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface FaseRepository extends JpaRepository<Fase, Long> {
}
