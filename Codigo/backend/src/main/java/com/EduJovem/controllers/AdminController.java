package com.EduJovem.controllers;

import java.util.List;
import java.util.Optional;

import com.EduJovem.models.Mundo;
import com.EduJovem.models.Nivel;
import com.EduJovem.services.game.MundoService;
import com.EduJovem.services.game.NivelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.EduJovem.models.User;
import com.EduJovem.services.UserAdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private UserAdminService userAdminService;
    @Autowired
    private MundoService mundoService;
    @Autowired
    private NivelService nivelService;
    
    @GetMapping("/")
    public String helloAdmineController(){
        return "Admin level access";
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userAdminService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Integer id){
        return userAdminService.getUser(id);
    }

    @DeleteMapping("/deleteuser/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id){
        return userAdminService.deleteUser(id);
    }

    @PutMapping("/updateuser/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User updatedUser){
        return userAdminService.updateUser(id, updatedUser);
    }
    @DeleteMapping("/deletemundo/{id}")
    public ResponseEntity<Void> deleteMundo(@PathVariable Integer id){
        return mundoService.deleteMundo(id);
    }
    @DeleteMapping("/deletenivel/{id}")
    public ResponseEntity<Void> deleteNivel(@PathVariable Integer id){
        return nivelService.deleteNivel(id);
    }

    @PutMapping("/updateMundo/{id}")
    public ResponseEntity<Mundo> updatedMundo(@PathVariable Integer id, @RequestBody Mundo updatedMundo){
        return mundoService.updateMundo(id, updatedMundo);
    }
    @PutMapping("/updatenivel/{id}")
    public ResponseEntity<Nivel> updateNivel(@PathVariable Integer id, @RequestBody Nivel updateNivel){
        return nivelService.updateNivel(id, updateNivel);
    }
}
