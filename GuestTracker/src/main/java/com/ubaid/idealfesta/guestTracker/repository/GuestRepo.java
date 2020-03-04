package com.ubaid.idealfesta.guestTracker.repository;

import com.ubaid.idealfesta.guestTracker.entity.Guest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuestRepo extends JpaRepository<Guest, Long> {
    Guest getByusername(String username);
}
