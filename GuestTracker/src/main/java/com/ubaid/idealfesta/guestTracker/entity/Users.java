package com.ubaid.idealfesta.guestTracker.entity;

import javax.persistence.*;
import java.util.List;

//@Entity
//@Table()
public class Users {

    @Id
    @Column(columnDefinition = "VARCHAR(50) NOT NULL")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String username;
    @Column(columnDefinition = "VARCHAR(50) NOT NULL")
    private String password;
    @Column(columnDefinition = "TINYINT NOT NULL DEFAULT 1")
    private Boolean enabled;

    //Mapping
    @OneToMany(mappedBy = "username", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Authorities> authorities;

    public List<Authorities> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(List<Authorities> authorities) {
        this.authorities = authorities;
    }

    public Users() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    @Override
    public String toString() {
        return "Users{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", enabled=" + enabled +
                '}';
    }
}
