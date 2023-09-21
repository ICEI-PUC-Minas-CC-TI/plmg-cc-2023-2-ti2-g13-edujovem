package com.crudTeste.fullstackbackend.controller;

import java.util.List;
import com.crudTeste.fullstackbackend.model.User;
import com.crudTeste.fullstackbackend.repository.UserRapository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UsarControler {

    @Autowired
    private UserRapository userRapository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRapository.save(newUser);
    }

    @GetMapping("/users")
    List<User>getAllUsers(){
        return userRapository.findAll();
    }
}
