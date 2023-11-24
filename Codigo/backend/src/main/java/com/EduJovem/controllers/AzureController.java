package com.EduJovem.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EduJovem.apiRestAzure.Https;

@RestController
@RequestMapping("/azure")
@CrossOrigin("*")
public class AzureController {
    
    @PostMapping("/despesaFutura")
    public double nextExpense(){
        return Https.fazerRequisicaoAzure();
    }
}
