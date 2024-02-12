package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.CustomerRegDao;
import com.example.demo.dao.MessRegDao;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Mess;
import com.example.demo.services.CustomerService;
import com.example.demo.services.MessService;

@RestController 
//@CrossOrigin(origins = "http://localhost:3000")
public class MessController {

	@Autowired
	MessService mservice;

	@PostMapping("/messregister")
	public Mess register(@RequestBody MessRegDao md) 
	{
	   return mservice.register(md);	
	}

}



