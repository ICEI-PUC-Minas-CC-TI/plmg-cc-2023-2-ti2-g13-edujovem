package com.EduJovem.controllers;

import com.EduJovem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.EduJovem.models.payload.LoginResponseDTO;
import com.EduJovem.models.payload.RegistrationDTO;
import com.EduJovem.services.authentication.AuthenticationService;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegistrationDTO body){
        return authenticationService.registerUser(body.getName(), body.getUsername(), body.getEmail(), body.getPassword());
    }
    
    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body){
        return authenticationService.loginUser(body.getUsername(), body.getPassword());
    }

    @GetMapping("/count")
    public Long countUsers(){
        return userRepository.count();
    }
}   
