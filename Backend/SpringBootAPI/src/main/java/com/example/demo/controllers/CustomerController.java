package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.CustomerRegDao;
import com.example.demo.dao.LoginDao;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class CustomerController 
{
	@Autowired
	CustomerService custservice;
	
	@Autowired
	LoginService logservice ;
	
	
	@PostMapping("/custregister")
	public Customer register(@RequestBody CustomerRegDao cd)
	{
		return custservice.custRegister(cd);
	}
	
	@GetMapping("/getcustomer")
	public Customer getCustomer(@RequestParam("login_id") int login_id)
	{
		Login log = logservice.getById(login_id);
		return custservice.getCustomer(log);
	}
	
    
	// ---------------------------------------------------------- updation

//	@PutMapping("{/id}")
//	public ResponseEntity<Customer> updateCustomer( @PathVariable cust_id , @RequestBody Customer customerDetails) 
//	{
//        Customer customer = customerRepository.findById(cust_id)
//                .orElseThrow(() -> new ResourceNotFoundException("Customer not found with id: " + cust_id ));
//        
//        customer.setName(customerDetails.getName());
//        customer.setContactno(customer)
//        
//        customer.setEmail(customerDetails.getEmail());
//        // Update other fields as needed
//
//        Customer updatedCustomer = customerRepository.save(customer);
//        return ResponseEntity.ok(updatedCustomer);
//    }
	
	
	
}
