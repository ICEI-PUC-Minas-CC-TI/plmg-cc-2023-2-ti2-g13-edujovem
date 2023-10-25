package com.EduJovem.services.game;


import com.EduJovem.controllers.game.MundoController;
import com.EduJovem.models.Mensagem;
import com.EduJovem.models.Mundo;
import com.EduJovem.models.Nivel;
import com.EduJovem.repository.MundoRepository;
import com.EduJovem.services.authentication.AuthenticationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MundoService { 


    @Autowired
    private AuthenticationService authenticationService;
    
    @Autowired
    private MundoRepository mundoRepository;

    public ResponseEntity<?> addMundo(Mundo mundo){
        return authenticationService.addMundo(mundo);
    }

    public List<Mundo> getAllMundos(){
        return mundoRepository.findAll();
    }
}
