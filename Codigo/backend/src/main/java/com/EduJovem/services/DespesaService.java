package com.EduJovem.services;

import com.EduJovem.controllers.game.MundoController;
import com.EduJovem.models.Despesas;
import com.EduJovem.models.Mensagem;
import com.EduJovem.models.Mundo;
import com.EduJovem.models.Nivel;
import com.EduJovem.repository.DespesaRepository;
import com.EduJovem.repository.MundoRepository;
import com.EduJovem.services.authentication.AuthenticationService;

import com.EduJovem.services.exceptions.DatabaseException;
import com.EduJovem.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DespesaService {


    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private DespesaRepository despesaRepository;

    public ResponseEntity<?> addDespesa(Despesas despesa){
        return authenticationService.addDespesa(despesa);
    }

    public List<Despesas> getAllDespesas(){
        return despesaRepository.findAll();
    }

}
