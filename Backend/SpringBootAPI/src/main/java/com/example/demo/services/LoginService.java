package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.example.demo.dao.LoginDao;
import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {

	@Autowired
	LoginRepository logrepo;

	public Login register(Login log) {
		return logrepo.save(log);
	}

	public Login checkLogin(String username, String password) {
		Optional<Login> log = logrepo.LoginDetail(username, password);

		Login res = null;

		try {
			res = log.get();
		} catch (Exception e) {
			res = null;
		}

		return res;
	}
}
