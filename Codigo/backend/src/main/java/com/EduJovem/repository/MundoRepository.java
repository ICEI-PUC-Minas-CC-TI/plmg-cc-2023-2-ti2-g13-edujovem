package com.EduJovem.repository;

import com.EduJovem.models.Mundo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MundoRepository extends JpaRepository<Mundo, Integer> {

    Optional<Mundo> findByName(String name);

}
