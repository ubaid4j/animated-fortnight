package com.ubaid.idealfesta.guestTracker.exceptions;

import com.fasterxml.jackson.databind.JsonMappingException;
import com.ubaid.idealfesta.guestTracker.exceptions.entity.EntityNotFoundExp;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConversionException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.net.ssl.HttpsURLConnection;

@ControllerAdvice
public class ExpController extends ResponseEntityExceptionHandler {
    @ExceptionHandler(JsonMappingException.class)
    public ResponseEntity<EntityNotFoundExp> handleJacksonException(HttpMessageConversionException exp) {
        EntityNotFoundExp exp_body = new EntityNotFoundExp(HttpsURLConnection.HTTP_NOT_FOUND, "The requested Entity is note found", exp.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exp_body);
    }
}
