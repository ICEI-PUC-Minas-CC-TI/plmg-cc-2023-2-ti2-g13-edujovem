package com.EduJovem.services.game;

import com.EduJovem.models.Mensagem;
import com.EduJovem.models.Nivel;
import com.EduJovem.repository.NivelRepository;
import com.EduJovem.services.authentication.AuthenticationService;
import com.EduJovem.services.exceptions.DatabaseException;
import com.EduJovem.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NivelService{


    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private NivelRepository nivelRepository;
    @Autowired
    private Mensagem mensagem;

    public ResponseEntity<?> addNivel(Nivel nivel){
        return authenticationService.addNivel(nivel);
    }

    public List<Nivel> getAllNiveis(){
        return nivelRepository.findAll();
    }


    public ResponseEntity<Void> deleteNivel(Integer id){
        try{
            nivelRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException(id);
        }catch(DataIntegrityViolationException e){
            throw new DatabaseException(e.getMessage());
        }
    }

    private void updateNivelData(Nivel nivel, Nivel updatedNivel) {
        if (updatedNivel.getNumero() != 0) {
            nivel.setNumero(updatedNivel.getNumero());
        }
        if (updatedNivel.getPontuacao() != null) {
            nivel.setPontuacao(updatedNivel.getPontuacao());
        }
    }
    public ResponseEntity<Nivel> updateNivel(Integer id, Nivel updatedNivel){
        try{
            Nivel nivel = nivelRepository.findById(id).get();
            updateNivelData(nivel, updatedNivel);
            Nivel updated = nivelRepository.save(nivel);
            return ResponseEntity.ok().body(updated);
        }catch(EntityNotFoundException e){
            return ResponseEntity.badRequest().build();

        }
    }
}
