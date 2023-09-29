package com.EduJovem.Edujovem.controller;

import com.EduJovem.Edujovem.model.User;
import com.EduJovem.Edujovem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserControler {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    List<User>getUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    User createUser(User user) {
        return userRepository.save(user);
    }
}
