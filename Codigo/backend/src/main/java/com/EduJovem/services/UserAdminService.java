package com.EduJovem.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.EduJovem.models.User;
import com.EduJovem.repository.UserRepository;
import com.EduJovem.services.exceptions.DatabaseException;
import com.EduJovem.services.exceptions.ResourceNotFoundException;
import com.EduJovem.services.interfaces.UserServiceInterface;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UserAdminService implements UserServiceInterface {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @Override
    public User getUser(Integer id){
        try{
            Optional<User> user = userRepository.findById(id);
            return user.orElseThrow(() -> new ResourceNotFoundException(id));
        }catch(EntityNotFoundException e){
            throw new ResourceNotFoundException(id);
        }
    }

    @Override
    public ResponseEntity<Void> deleteUser(Integer id){
        try {
            userRepository.deleteById(id);
	        return ResponseEntity.noContent().build();
	    } catch (EmptyResultDataAccessException e) {
	        throw new ResourceNotFoundException(id);
	    }catch(DataIntegrityViolationException e){
            throw new DatabaseException(e.getMessage());
        }
    }

    private void updateUserData(User user, User updatedUser) {
		if (updatedUser.getName() != null) {
	        user.setName(updatedUser.getName());
	    }
        if(updatedUser.getUsername() != null) {
            user.setUsername(updatedUser.getUsername());
        }
	    if (updatedUser.getEmail() != null) {
	        user.setEmail(updatedUser.getEmail());
	    }
	    if(updatedUser.getPassword() != null) {
            user.setPassword(updatedUser.getPassword());
        }
	}

    @Override
    public ResponseEntity<User> updateUser(Integer id, User updatedUser){
        try{
            User user = userRepository.findById(id).get();
	        updateUserData(user, updatedUser);
	        User updated = userRepository.save(user);
	        return ResponseEntity.ok().body(updated);
        }catch(EntityNotFoundException e){
            return ResponseEntity.notFound().build();
        }
    }
}
