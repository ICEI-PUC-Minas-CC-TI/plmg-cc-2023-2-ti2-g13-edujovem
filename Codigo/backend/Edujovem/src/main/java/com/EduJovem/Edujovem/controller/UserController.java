package com.EduJovem.Edujovem.controller;
import com.EduJovem.Edujovem.model.User;
import com.EduJovem.Edujovem.service.UserService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/users")
@CrossOrigin("*")                             // Configurar permissões de origem cruzada (Cross-Origin Resource Sharing - CORS)
public class UserController {                // A anotação @CrossOrigin("*") no seu exemplo permite que qualquer origem (ou seja, qualquer domínio) 
	@Autowired                              //acesse os endpoints do controlador UserController sem restrições de CORS. O asterisco (*) indica que qualquer origem é permitida
	private UserService service;

    @GetMapping("/")
    public String helloUserController(){
        return "User access level";
    }
	
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
