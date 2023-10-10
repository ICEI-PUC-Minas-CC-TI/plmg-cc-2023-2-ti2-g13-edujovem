package com.EduJovem;

import java.util.HashSet;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.EduJovem.models.Role;
import com.EduJovem.models.User;
import com.EduJovem.repository.RoleRepository;
import com.EduJovem.repository.UserRepository;

@SpringBootApplication
public class EduJovem {
	public static void main(String[] args) {
		SpringApplication.run(EduJovem.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository, PasswordEncoder passwordEncode){
		return args ->{
			if(roleRepository.findByAuthority("ADMIN").isPresent()) return;
			Role adminRole = roleRepository.save(new Role("ADMIN"));
			roleRepository.save(new Role("USER"));

			Set<Role> roles = new HashSet<>();
			roles.add(adminRole);

			User admin = new User(1,"admin" ,"admin", "admin@admin.com", passwordEncode.encode("password"), roles);

			userRepository.save(admin);
		};
	}
}
