package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Menu;
import com.example.demo.services.MenuService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {

	@Autowired
	MenuService mtservice;
	
	@GetMapping("/menus")
	public List<Menu> getAll()
	{
		return mtservice.getMenu();
	}
}
