package com.EduJovem.Edujovem.controller;

import com.EduJovem.Edujovem.model.Mundo;
import com.EduJovem.Edujovem.repository.MundoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MundoControler {

    @Autowired
    private MundoRepository mundoRepository;

    @GetMapping("/mundos")
    List<Mundo>getMundos() {
        return mundoRepository.findAll();
    }

    @PostMapping("/mundo")
    Mundo createMundo(Mundo mundo) {
        return mundoRepository.save(mundo);
    }
}
