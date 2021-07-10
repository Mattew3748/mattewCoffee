package com.example.demo.mainMenu.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.mainMenu.service.MainMenuService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class MainMenuController {

	private final MainMenuService service;
	
	@CrossOrigin
	@GetMapping("/mainMenu")
	public ResponseEntity<?> findAll(){
		return new ResponseEntity<>(service.findAll(),HttpStatus.OK);
	}
	@CrossOrigin
	@GetMapping("/mainMenu/{category}")
	public ResponseEntity<?> findCategory(@PathVariable String category){
		return new ResponseEntity<>(service.findCategory(category),HttpStatus.OK);
	}
	@CrossOrigin
	@GetMapping("/mainMenu/detail/{id}")
	public ResponseEntity<?> findAll(@PathVariable String id){
		return new ResponseEntity<>(service.findDetailById(id),HttpStatus.OK);
	}
	
}
