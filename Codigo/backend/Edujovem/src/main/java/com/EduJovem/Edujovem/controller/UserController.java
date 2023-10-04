package com.EduJovem.Edujovem.controller;
import com.EduJovem.Edujovem.model.User;
import com.EduJovem.Edujovem.service.UserService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/users")
public class UserController {
	@Autowired
	private UserService service;
	
	@GetMapping
    public List<User> getAllUsers(){
        return service.getAllUsers();
    }
    
    @PostMapping
    public User insert(@RequestBody User user){
        return service.insert(user);
    }

    @GetMapping("/{id}")
    public Optional<User> getUser(@PathVariable Long id){
        return service.getUser(id);
    }
}
