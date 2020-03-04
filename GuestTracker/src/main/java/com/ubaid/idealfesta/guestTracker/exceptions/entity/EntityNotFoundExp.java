package com.ubaid.idealfesta.guestTracker.exceptions.entity;

public class EntityNotFoundExp {
    private int status;
    private String message;
    private String detail;

    @Override
    public String toString() {
        return "EntityNotFoundExp{" +
                "status=" + status +
                ", message='" + message + '\'' +
                ", detail='" + detail + '\'' +
                '}';
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public EntityNotFoundExp(int status, String message, String detail) {
        this.status = status;
        this.message = message;
        this.detail = detail;
    }

    public EntityNotFoundExp(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
