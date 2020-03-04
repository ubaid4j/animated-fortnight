package com.ubaid.idealfesta.guestTracker.entity;

import javax.persistence.*;
import java.io.Serializable;

//@Entity
//@Table(name = "authorities", uniqueConstraints = @UniqueConstraint(columnNames = {"username", "authority"}))
public class Authorities implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JoinColumn(columnDefinition = "VARCHAR(50) NOT NULL", name = "username")
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Users username;

    @Column(columnDefinition = "VARCHAR(50) NOT NULL")
    private String authority;

    public Authorities() {
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    @Override
    public String toString() {
        return "Authorities{" +
                "username=" + username +
                ", authority='" + authority + '\'' +
                '}';
    }

    public Users getUsername() {
        return username;
    }

    public void setUsername(Users username) {
        this.username = username;
    }

}
