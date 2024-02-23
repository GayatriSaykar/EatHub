package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Menu;
import com.example.demo.entities.MenuSubscription;
import com.example.demo.repositories.MenuRepository;

@Service
public class MenuService {

	@Autowired
	MenuRepository mtrepo;

	public List<Menu> getMenu() {
		return mtrepo.findAll();
	}

	public Menu getMenuSubid(int menu_id) {
		// TODO Auto-generated method stub
		return mtrepo.findById(menu_id).get();
	}

}
