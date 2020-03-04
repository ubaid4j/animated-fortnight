package com.ubaid.idealfesta.guestTracker.services;

import com.ubaid.idealfesta.guestTracker.entity.Guest;
import com.ubaid.idealfesta.guestTracker.repository.GuestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuestServiceImp implements GuestService{

    private GuestRepo repo;

    public GuestServiceImp(@Autowired GuestRepo repo) {
        this.repo = repo;
    }

    @Override
    public Guest save(Guest guest) {
        return repo.save(guest);
    }

    @Override
    public Guest get(String username) {
        return repo.getByusername(username);
    }

    @Override
    public Guest get(Long id) {
        return repo.getOne(id);
    }

    @Override
    public List<Guest> getAll() {
        return repo.findAll();
    }

    @Override
    public Guest delete(Long id) {
        Guest guest = get(id);
        repo.delete(guest);
        return  guest;
    }

    @Override
    public Guest update(Guest guest) {
        return repo.save(guest);
    }
}
