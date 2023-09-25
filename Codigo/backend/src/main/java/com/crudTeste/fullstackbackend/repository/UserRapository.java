package com.crudTeste.fullstackbackend.repository;

import com.crudTeste.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRapository extends JpaRepository<User, Long> {

}
