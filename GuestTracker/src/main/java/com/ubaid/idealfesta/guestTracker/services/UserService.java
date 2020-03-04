package com.ubaid.idealfesta.guestTracker.services;

import com.ubaid.idealfesta.guestTracker.entity.Users;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

public interface UserService {
    public Users getUser(String name);
}
