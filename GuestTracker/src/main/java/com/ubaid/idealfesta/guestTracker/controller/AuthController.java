package com.ubaid.idealfesta.guestTracker.controller;

import com.ubaid.idealfesta.guestTracker.entity.Auth;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    @PostMapping("user")
    public Auth authenticate() {
        return new Auth("You have been authenticated");
    }
}
