package com.EduJovem.controllers.game;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/nivel")
//@CrossOrigin("*")
public class NivelController {

    @GetMapping("/")
    public String helloNivelController(){
        return "Nivel access level";
    }

}
