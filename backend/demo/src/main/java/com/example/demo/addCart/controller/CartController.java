package com.example.demo.addCart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.addCart.domain.AddCartVO;
import com.example.demo.addCart.serivce.CartService;

@RestController
@RequestMapping("/api")
public class CartController {

	@Autowired
	private CartService service;

	@CrossOrigin
	@GetMapping("/cart/{status}")
	public ResponseEntity<?> findAllCart(@PathVariable String status) {
		return new ResponseEntity<>(service.findAllCart(status), HttpStatus.OK);
	}

	@CrossOrigin
	@PostMapping("/cart")
	public ResponseEntity<?> addCartSave(@RequestBody AddCartVO vo) {

		String check = service.findByIdIceHot(vo);

		if (check.equals("empty")) {
			return new ResponseEntity<>(service.addCartSave(vo), HttpStatus.CREATED);
		} else {
			return null;

		}
	}

	@CrossOrigin
	@DeleteMapping("/cart/{idx}")
	public ResponseEntity<?> deleteById(@PathVariable Long idx) {
		return new ResponseEntity<>(service.deleteById(idx), HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping("/cart/{idx}&{count}")
	public ResponseEntity<?> updateCart(@PathVariable Long idx, @PathVariable Integer count) {
		return new ResponseEntity<>(service.updateCart(idx, count), HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping("/cartAll")
	public ResponseEntity<?> updateStatusOrdered() {

		return new ResponseEntity<>(service.updateStatusOrdered(), HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping("/cart/countCardNum")
	public Integer countCardNum() {
		Integer check = service.countCardNum();

		return check;
	}

	// admin 부분
	@CrossOrigin
	@GetMapping("/admin/{status}")
	public ResponseEntity<?> findAllbyStatus(@PathVariable String status) {
		return new ResponseEntity<>(service.findAllbyStatus(status), HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping("/admin/{idx}")
	public ResponseEntity<?> updateStatusByidx(@PathVariable Long idx) {

		return new ResponseEntity<>(service.updateStatusByidx(idx), HttpStatus.OK);
	}

}
