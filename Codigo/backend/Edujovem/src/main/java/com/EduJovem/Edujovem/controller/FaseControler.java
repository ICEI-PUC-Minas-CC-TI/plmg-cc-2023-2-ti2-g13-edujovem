package com.EduJovem.Edujovem.controller;

import com.EduJovem.Edujovem.model.Fase;
import com.EduJovem.Edujovem.repository.FaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FaseControler {

    @Autowired
    private FaseRepository faseRepository;

    @GetMapping("/fases")
    List<Fase> getFases() {
        return faseRepository.findAll();
    }

    @PostMapping("/fase")
    Fase createFase(Fase fase) {
        return faseRepository.save(fase);
    }
}
