package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CustomerRegDao;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.LoginRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository custrepo;

	@Autowired
	RoleService rs;

	@Autowired
	LoginService logservice;
	
	@Autowired
	LoginRepository lr ;

	public Customer register(CustomerRegDao cd)
	{
		Role ro = rs.getRole(2);

		Login lg = new Login(cd.getUsername(), cd.getPassword(), ro);
		lr.save(lg);

		Customer custom = new Customer(cd.getCust_name(), cd.getCust_address(), cd.getContactno(), cd.getEmail(),
				cd.getGender(), lg);

		return custrepo.save(custom);
	}
}
