package com.ubaid.idealfesta.guestTracker.services;

import com.ubaid.idealfesta.guestTracker.entity.Guest;
import org.aspectj.lang.annotation.After;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
class GuestServiceImpTest {

    @Autowired
    GuestService guestService;

    @Test
    @Order(1)
    void save() {
        Guest guest = guestService.save(guest2());
        assertThat(guest).isEqualTo(guest2());
        assertThat(guestService.getAll().size()).isEqualTo(2);
    }

    @Test
    @Order(2)
    void get() {
        Guest guest = guestService.get(1L);
        assertThat(guest).isEqualTo(guest1());
    }

    @Test
    @Order(10)
    void delete() {
        Guest guest = guestService.get(1L);
        assertThat(guest).isEqualTo(guest1());
    }

    @Test
    @Order(4)
    void update() {
        Guest guest = guest1();
        guest.setUsername("ubaid 1");
        assertThat(guest).isNotEqualTo(guestService.get(1L));
    }

    private Guest guest1() {
        Guest guest = new Guest();
        guest.setId(1L);
        guest.setApproved(false);
        guest.setDate(null);
        guest.setDays(3);
        guest.setFloor(4);
        guest.setUsername("ubaid");
        return guest;
    }

    private Guest guest2() {
        Guest guest = new Guest();
        guest.setId(2L);
        guest.setApproved(false);
        guest.setDate(null);
        guest.setDays(10);
        guest.setFloor(4);
        guest.setUsername("attiq");
        return guest;
    }

}

// values(1, 0, '2020-03-04', 3, 4, 'ubaid');
