package com.EduJovem.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.EduJovem.models.User;
import com.EduJovem.services.UserAdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private UserAdminService userAdminService;
    
    @GetMapping("/")
    public String helloAdmineController(){
        return "Admin level access";
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userAdminService.getAllUsers();
    }
}
