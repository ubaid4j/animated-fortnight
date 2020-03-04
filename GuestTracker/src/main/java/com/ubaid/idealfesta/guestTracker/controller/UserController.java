package com.ubaid.idealfesta.guestTracker.controller;

import com.ubaid.idealfesta.guestTracker.entity.Guest;
import com.ubaid.idealfesta.guestTracker.services.GuestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private GuestService service;

    public UserController(@Autowired GuestService service)
    {
        this.service = service;
    }

    @PostMapping("/")
    public Guest save(@RequestBody Guest guest) {
        return service.save(guest);
    }
}
