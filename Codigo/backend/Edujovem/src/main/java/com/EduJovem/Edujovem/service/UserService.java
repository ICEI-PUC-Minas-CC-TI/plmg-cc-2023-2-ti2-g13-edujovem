package com.EduJovem.Edujovem.service;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.EduJovem.Edujovem.model.Role;
import com.EduJovem.Edujovem.model.User;
import com.EduJovem.Edujovem.repository.UserRepository;

@Service
public class UserService implements UserServiceInterface, UserDetailsService {

    @Autowired
    private PasswordEncoder encoder;

	@Autowired
	private UserRepository repository;
	
	@Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User insert(User user){
        return repository.save(user);
    }

    @Override
    public Optional<User> getUser(Long id){
        return repository.findById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        System.out.println("In the USER DETAILS SERVICE");

        if(!username.equals("Ethan")) throw new UsernameNotFoundException("Not Ethan");

        Set<Role> roles = new HashSet<>();
        roles.add(new Role(1, "USER"));

        return new User(1, "Ethan", "aasda@asdsa", encoder.encode("password"), roles);
    }
}

    
