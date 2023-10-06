package com.EduJovem.Edujovem.controller;
import com.EduJovem.Edujovem.model.RespostaModel;
import com.EduJovem.Edujovem.model.User;
import com.EduJovem.Edujovem.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
public class UserControler {
    @Autowired
    private UserService userService;

    //Metodo teste
    @GetMapping("/hello")
    String hello() {
        return "Esta funcionando";
    }


    //Rota de listagem de todos usuarios
    @GetMapping("/userMostrar")
    public Iterable<User> listar() {
        return userService.listar();
    }

    //Rota de cadastro de usuarios com informacoes validadas
    @PostMapping("/userCadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody User user){
        return userService.cadastrarAlterar(user, "cadastrar");
    }

    //Rota para alterar usuarios com informacoes validadas
    @PostMapping("/userAlterar")
    public ResponseEntity<?> alterar(@RequestBody User user){
        return userService.cadastrarAlterar(user, "alterar");
    }

    //Rota para remover usuarios
    @DeleteMapping("/userRemover/{id}")
    public ResponseEntity<RespostaModel> remover(@PathVariable Long id){
        return userService.remover(id);
    }

}
