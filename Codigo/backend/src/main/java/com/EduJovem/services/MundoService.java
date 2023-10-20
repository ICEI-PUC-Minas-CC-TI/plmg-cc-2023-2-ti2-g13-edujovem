package com.EduJovem.services;


import com.EduJovem.controllers.MundoController;
import com.EduJovem.models.Mensagem;
import com.EduJovem.models.Mundo;
import com.EduJovem.repository.MundoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MundoService{


    @Autowired
    private AuthenticationService authenticationService;


    public ResponseEntity<?> addMundo(Mundo mundo){
        return authenticationService.addMundo(mundo);
    }

}
