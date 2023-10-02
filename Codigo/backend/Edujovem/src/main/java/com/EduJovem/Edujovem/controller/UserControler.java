package com.EduJovem.Edujovem.controller;

import com.EduJovem.Edujovem.model.User;
import com.EduJovem.Edujovem.repository.UserRepository;
import com.EduJovem.Edujovem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserControler {
    @Autowired
    private UserService userService;

    //Metodo teste
    @GetMapping("/hello")
    String hello() {
        return "Esta funcionando";
    }


    //Metodo de listagem de todos produtos
    @GetMapping("/users")
    public Iterable<User> listar() {
        return userService.listar();
    }

}
