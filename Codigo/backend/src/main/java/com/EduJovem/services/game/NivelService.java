package com.EduJovem.services.game;

import com.EduJovem.models.Nivel;
import com.EduJovem.repository.NivelRepository;
import com.EduJovem.services.authentication.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class NivelService{


    @Autowired
    private AuthenticationService authenticationService;

    public ResponseEntity<?> addNivel(Nivel nivel){
        return authenticationService.addNivel(nivel);
    }

}
