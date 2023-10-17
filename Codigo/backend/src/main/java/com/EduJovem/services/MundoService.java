package com.EduJovem.services;


import com.EduJovem.repository.MundoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MundoService{


    @Autowired
    private MundoRepository mundoRepository;


}
