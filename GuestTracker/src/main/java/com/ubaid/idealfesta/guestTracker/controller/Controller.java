package com.ubaid.idealfesta.guestTracker.controller;

import com.ubaid.idealfesta.guestTracker.entity.Guest;
import com.ubaid.idealfesta.guestTracker.services.GuestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("admin")
public class Controller {

    private GuestService service;

    public Controller(@Autowired GuestService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public Guest get(@PathVariable("id") Long id) {
        return service.get(id);
    }

    @GetMapping("/")
    public List<Guest> getAll() {
        return service.getAll();
    }

    @DeleteMapping("/{id}")
    public Guest delete(@PathVariable("id") Long id) {
        return service.delete(id);
    }

    @PutMapping("/")
    public Guest update(@RequestBody  Guest guest) {
        return  service.update(guest);
    }
}
