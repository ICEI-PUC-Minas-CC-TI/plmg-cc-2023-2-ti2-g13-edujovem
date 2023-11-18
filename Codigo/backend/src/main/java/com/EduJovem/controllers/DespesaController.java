package com.EduJovem.controllers;

import com.EduJovem.models.Despesas;
import com.EduJovem.models.Mensagem;
import com.EduJovem.models.Mundo;
import com.EduJovem.models.Nivel;
import com.EduJovem.repository.MundoRepository;
import com.EduJovem.services.DespesaService;
import com.EduJovem.services.game.MundoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Despesa")
@CrossOrigin("*")

public class DespesaController{

    @Autowired
    private DespesaService despesaService;
    @GetMapping("/testaDespesa")
    public String helloMundoController(){
        return "Despesa access level";
    }



    @PostMapping("/addDespesas")
    public ResponseEntity<?> addDespesas(@RequestBody Despesas despesas){
        return despesaService.addDespesa(despesas);
    }

    @GetMapping("/listarDespesas")
    public List<Despesas> getAllDespesas(){
        return despesaService.getAllDespesas();
    }



}
