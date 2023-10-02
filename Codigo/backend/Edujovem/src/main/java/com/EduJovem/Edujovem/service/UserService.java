package com.EduJovem.Edujovem.service;

import com.EduJovem.Edujovem.model.RespostaModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    //Metodo de cadastro de produtos com informacoes validadas
    public ResponseEntity<?> cadastrar(User user){

        if(user.getName().equals("")) {
            respostaModel.setMensagem("Nome do usuario e obrigatorio");
            return new ResponseEntity<RespostaModel>(respostaModel, HttpStatus.BAD_REQUEST);
        } else if (user.getEmail().equals("")){
            respostaModel.setMensagem("O email e obrigatorio");
            return new ResponseEntity<RespostaModel>(respostaModel, HttpStatus.BAD_REQUEST);
        } else if (user.getPassword().equals("")){
            respostaModel.setMensagem("A senha e obrigatoria");
            return new ResponseEntity<RespostaModel>(respostaModel, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<User>(userR.save(user), HttpStatus.CREATED);
        }
        // precisa implementar um validador de email ja cadastrado, quantidade minima de caracters. A decidir com o grupo
    }
}
