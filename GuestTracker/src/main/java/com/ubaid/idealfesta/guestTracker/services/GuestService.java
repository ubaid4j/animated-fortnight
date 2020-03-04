package com.ubaid.idealfesta.guestTracker.services;

import com.ubaid.idealfesta.guestTracker.entity.Guest;

import java.util.List;

public interface GuestService {
    public Guest save(Guest guest);
    public Guest get(String username);
    public Guest get(Long id);
    public List<Guest> getAll();
    public Guest delete(Long id);
    public Guest update(Guest guest);
}
