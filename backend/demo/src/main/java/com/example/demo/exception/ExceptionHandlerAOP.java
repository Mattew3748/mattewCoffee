package com.example.demo.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javassist.NotFoundException;



@RestController
@ControllerAdvice
public class ExceptionHandlerAOP extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler(Exception.class)
	public final ResponseEntity<Object> handleAllException(Exception ex, WebRequest request) {
		ExceptionHandlerVO exce = new ExceptionHandlerVO(new Date(), ex.getMessage(), request.getDescription(false));

		return new ResponseEntity(exce, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(NotFoundException.class) // userNotFoundException이 발생했을때만 실행
	public final ResponseEntity<Object> handleUserNotFoundException(Exception ex, WebRequest request) {
		ExceptionHandlerVO exce = new ExceptionHandlerVO(new Date(), ex.getMessage(), request.getDescription(false));

		return new ResponseEntity(exce, HttpStatus.NOT_FOUND);

	}


}
