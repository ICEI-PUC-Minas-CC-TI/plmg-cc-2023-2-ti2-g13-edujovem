package com.EduJovem.Edujovem.controller;

import com.EduJovem.Edujovem.model.User;
import com.EduJovem.Edujovem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserControler {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/hello")
    String hello() {
        return "Esta funcionando";
    }
    @GetMapping("/users")
    Iterable<User> listar() {
        return userRepository.findAll();
    }

    @PostMapping("/user")
    User createUser(User user) {
        return userRepository.save(user);
    }
}
