package com.EduJovem.Edujovem.controller;
import com.EduJovem.Edujovem.model.User;
import com.EduJovem.Edujovem.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

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
    //Metodo de cadastro de produtos com informacoes validadas
    @PostMapping("/user")
    public ResponseEntity<?> cadastrar(@RequestBody User user){
        return userService.cadastrar(user);
    }
}
