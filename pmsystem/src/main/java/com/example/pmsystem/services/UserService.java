package com.example.pmsystem.services;

import ch.qos.logback.core.encoder.EchoEncoder;
import com.example.pmsystem.domain.User;
import com.example.pmsystem.exceptions.UsernameAlreadyExistsException;
import com.example.pmsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser( User newUser) {
        try {
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            //Username has to be unique (exception)
            newUser.setUsername(newUser.getUsername());
            //Password and confirm password match
            //Do not persist or show confirmPassword
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);
        }catch(Exception e) {
            throw new UsernameAlreadyExistsException("Username '" + newUser.getUsername() + "' already exists!");
        }


    }
}
