package com.EduJovem.services.game;


import com.EduJovem.controllers.game.MundoController;
import com.EduJovem.models.Mensagem;
import com.EduJovem.models.Mundo;
import com.EduJovem.models.Nivel;
import com.EduJovem.repository.MundoRepository;
import com.EduJovem.services.authentication.AuthenticationService;

import com.EduJovem.services.exceptions.DatabaseException;
import com.EduJovem.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
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

    public ResponseEntity<Void> deleteMundo(Integer id){
        try{
            mundoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException(id);
        }catch(DataIntegrityViolationException e){
            throw new DatabaseException(e.getMessage());
        }
    }
}
