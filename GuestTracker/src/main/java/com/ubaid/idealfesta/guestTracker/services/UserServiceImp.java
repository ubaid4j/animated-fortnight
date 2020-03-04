package com.ubaid.idealfesta.guestTracker.services;

import com.ubaid.idealfesta.guestTracker.entity.Users;
import com.ubaid.idealfesta.guestTracker.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserServiceImp implements UserService {

    private UserRepo repo;

    public UserServiceImp(@Autowired UserRepo repo) {
        this.repo = repo;
    }

    @Override
    @Transactional
    public Users getUser(String name) {
        return repo.getOne(name);
    }
}
