package com.ubaid.idealfesta.guestTracker.repository;

import com.ubaid.idealfesta.guestTracker.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Users, String> {
}
