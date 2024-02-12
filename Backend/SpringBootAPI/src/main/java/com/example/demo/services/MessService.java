package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CustomerRegDao;
import com.example.demo.dao.MessRegDao;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Mess;
import com.example.demo.entities.Role;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.MessRepository;

@Service
public class MessService {
	@Autowired
	MessRepository messrepo;

	@Autowired
	RoleService rs;

	@Autowired
	LoginService logservice;

	public Mess register(MessRegDao md )
	{
		Role ro = rs.getRole(3) ;
		
		Login lg = new Login(md.getUsername() , md.getPassword() , ro );
		
		Mess  mess = new Mess(md.getMess_name() , md.getOwner_name() , md.getMess_address(),md.getCity() , md.getContactno() , md.getEmail() , md.getLogin_id());
	
	    return messrepo.save(mess) ;
	}
}