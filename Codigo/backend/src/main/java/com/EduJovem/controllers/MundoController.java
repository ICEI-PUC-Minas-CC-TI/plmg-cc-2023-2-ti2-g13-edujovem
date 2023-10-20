package com.EduJovem.controllers;

import com.EduJovem.models.Mensagem;
import com.EduJovem.models.Mundo;
import com.EduJovem.repository.MundoRepository;
import com.EduJovem.services.MundoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mundo")
@CrossOrigin("*")
//@CrossOrigin("*")
public class MundoController {

    @GetMapping("/testehallomundo")
    public String helloMundoController(){
        return "Mundo access level";
    }

    @Autowired
    private MundoService mundoService;

    @PostMapping("/addmundo")
    public ResponseEntity<?> addMundo(@RequestBody Mundo mundo){
        return mundoService.addMundo(mundo);
    }

}
