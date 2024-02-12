package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.CustomerRegDao;
import com.example.demo.dao.LoginDao;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.services.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class CustomerController {
	@Autowired
	CustomerService custservice;

	@PostMapping("/custregister")
	public Customer register(@RequestBody CustomerRegDao cd) {
		
		return custservice.register(cd);
	}
}
