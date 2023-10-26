package com.EduJovem.repository;

import com.EduJovem.models.Nivel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NivelRepository extends JpaRepository<Nivel, Integer> {

    Optional<Nivel> findByNumero(Integer number);

}
