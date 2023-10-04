package com.EduJovem.Edujovem.service;

import java.util.List;
import java.util.Optional;

import com.EduJovem.Edujovem.model.User;

public interface UserServiceInterface {
	List<User> getAllUsers();
	User insert(User user);
	Optional<User> getUser(Long id);
}
