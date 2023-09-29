package com.EduJovem.Edujovem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EduJovem.Edujovem.model.User;
import com.EduJovem.Edujovem.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userR;

    //Metodo de listagem de todos produtos
    public Iterable<User> listar(){
        return userR.findAll();
    }



}
