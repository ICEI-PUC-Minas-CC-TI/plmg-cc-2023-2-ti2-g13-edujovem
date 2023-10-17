package com.EduJovem.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mundo")
//@CrossOrigin("*")
public class MundoController {

    @GetMapping("/")
    public String helloMundoController(){
        return "Mundo access level";
    }

}
