package com.EduJovem.Edujovem.repository;

import com.EduJovem.Edujovem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepository extends JpaRepository<User, Long> {
}
