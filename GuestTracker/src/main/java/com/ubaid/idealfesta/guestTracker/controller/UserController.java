package com.ubaid.idealfesta.guestTracker.controller;

import com.ubaid.idealfesta.guestTracker.entity.Guest;
import com.ubaid.idealfesta.guestTracker.services.GuestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
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
