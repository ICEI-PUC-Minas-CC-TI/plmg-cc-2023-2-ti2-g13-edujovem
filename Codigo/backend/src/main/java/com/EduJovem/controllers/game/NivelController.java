package com.EduJovem.controllers.game;


import com.EduJovem.models.Nivel;
import com.EduJovem.services.game.NivelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/nivel")
@CrossOrigin("*")
public class NivelController {

    @GetMapping("/")
    public String helloNivelController(){
        return "Nivel access level";
    }

    @Autowired
    private NivelService nivelService;

    @PostMapping("/addnivel")
    public ResponseEntity<?> addNivel(@RequestBody Nivel nivel){
        return nivelService.addNivel(nivel);
    }

    @GetMapping("/niveis")
    public List<Nivel> getAllNiveis(){
        return nivelService.getAllNiveis();
    }

}
