package com.ubaid.idealfesta.guestTracker;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages= {"com.ubaid.idealfesta.guestTracker.entity"})
public class GuestTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(GuestTrackerApplication.class, args);
	}

}
