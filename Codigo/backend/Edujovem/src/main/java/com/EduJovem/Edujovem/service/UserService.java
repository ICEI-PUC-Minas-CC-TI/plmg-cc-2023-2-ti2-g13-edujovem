package com.EduJovem.Edujovem.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.EduJovem.Edujovem.model.User;
import com.EduJovem.Edujovem.repository.UserRepository;

@Service
public class UserService implements UserServiceInterface {
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
}

    
