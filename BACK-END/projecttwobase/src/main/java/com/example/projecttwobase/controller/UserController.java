package com.example.projecttwobase.controller;

import com.example.projecttwobase.model.User;
import com.example.projecttwobase.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    //ENDPOINT THAT ALLOWS A USER TO SIGN UP / REFER TO USER SERVICE
    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User newUser) {
        return ResponseEntity.ok(new JwtResponse(userService.createUser(newUser)));
    }

    //ENDPOINT THAT ALLOWS A USER TO LOG IN / REFER TO USER SERVICE
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return ResponseEntity.ok(new JwtResponse(userService.login(user)));
    }

    //ENDPOINT THAT SHOWS A USER LIST / REFER TO USER SERVICE
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/users/list")
    public Iterable<User> listUsers(){
        return userService.listUsers();
    }


    //ENDPOINT TO THE ALMIGHTY HELLO WORLD / REFER TO 101
    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello World!!";
    }
}
