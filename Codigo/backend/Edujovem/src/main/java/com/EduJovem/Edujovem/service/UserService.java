package com.EduJovem.Edujovem.service;

import com.EduJovem.Edujovem.model.RespostaModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.EduJovem.Edujovem.model.User;
import com.EduJovem.Edujovem.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userR;

    @Autowired
    private RespostaModel respostaModel;

    //Metodo de listagem de todos produtos
    public Iterable<User> listar(){
        return userR.findAll();
    }

    //Metodo de cadastro de produtos
}
