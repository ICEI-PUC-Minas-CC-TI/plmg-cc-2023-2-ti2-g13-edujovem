package com.EduJovem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.EduJovem.models.User;
import com.EduJovem.repository.UserRepository;
import com.EduJovem.services.interfaces.UserServiceInterface;

@Service
public class UserAdminService implements UserServiceInterface{
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
}
