package com.EduJovem.services.game;

import com.EduJovem.models.Nivel;
import com.EduJovem.repository.NivelRepository;
import com.EduJovem.services.authentication.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NivelService{


    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private NivelRepository nivelRepository;

    public ResponseEntity<?> addNivel(Nivel nivel){
        return authenticationService.addNivel(nivel);
    }

    public List<Nivel> getAllNiveis(){
        return nivelRepository.findAll();
    }

}