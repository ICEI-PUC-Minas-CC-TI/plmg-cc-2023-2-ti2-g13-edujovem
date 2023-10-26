package com.EduJovem.services.interfaces;

import java.util.List;
import org.springframework.http.ResponseEntity;
import com.EduJovem.models.User;

public interface UserServiceInterface {
    List<User> getAllUsers();
    User getUser(Integer id);
    ResponseEntity<Void> deleteUser(Integer id);
    ResponseEntity<User> updateUser(Integer id, User updateUser);
}
