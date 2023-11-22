package com.EduJovem.services.authentication;

import java.util.HashSet;
import java.util.Set;

import com.EduJovem.models.*;
import com.EduJovem.models.payload.LoginResponseDTO;
import com.EduJovem.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private Mensagem mensagem;
    @Autowired
    private MundoRepository mundoRepository;
    @Autowired
    private NivelRepository nivelRepository;
    @Autowired
    private ExpenseRepository expRepository;

    public ResponseEntity<?> addDispesa(Expense expense) {
        return new ResponseEntity<>(expRepository.save(expense), HttpStatus.OK);
    }

    public ResponseEntity<?> registerUser(String name, String username, String email, String password){

        if(name.equals("")){
            mensagem.setMensagem("Nome não pode ser vazio");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else if(username.equals("")){
            mensagem.setMensagem("Username não pode ser vazio");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else if(email.equals("")){
            mensagem.setMensagem("Email não pode ser vazio");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else if(password.equals("")){
            mensagem.setMensagem("Senha não pode ser vazia");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else if(userRepository.findByUsername(username).isPresent()){
            mensagem.setMensagem("Username já cadastrado");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else if(userRepository.findByEmail(email).isPresent()){
            mensagem.setMensagem("Email já cadastrado");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else{
            String encodedPassword = passwordEncoder.encode(password);
            Role userRole = roleRepository.findByAuthority("USER").get();

            Set<Role> authorities = new HashSet<>();

            authorities.add(userRole);

            return new ResponseEntity<>(userRepository.save(new User(0, name, username, email, encodedPassword, authorities)), HttpStatus.CREATED);
        }
    }

    public LoginResponseDTO loginUser(String username, String password){

        try{
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );

            String token = tokenService.generateJwt(auth);

            return new LoginResponseDTO(userRepository.findByUsername(username).get(), token);

        } catch(AuthenticationException e){
            return new LoginResponseDTO(null, "");
        }
    }
    public ResponseEntity<?> addMundo(Mundo mundo){
        if(mundo.getName().equals("")){
            mensagem.setMensagem("Nome não pode ser vazio");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else if (mundoRepository.findByName(mundo.getName()).isPresent()) {
            mensagem.setMensagem("Nome já cadastrado");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else{
            return new ResponseEntity<>(mundoRepository.save(mundo), HttpStatus.OK);
        }

    }

    public ResponseEntity<?> addNivel(Nivel nivel){
        if(nivelRepository.findByNumero(nivel.getNumero()).isPresent()){
            mensagem.setMensagem("Número já cadastrado");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else{
            return new ResponseEntity<>(nivelRepository.save(nivel), HttpStatus.OK);
        }
    }

    public ResponseEntity<?> addExpense(Expense expense) {
            return new ResponseEntity<>(expRepository.save(expense), HttpStatus.OK);
    }
}