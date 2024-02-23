package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.MenuSubscriptionDao;
import com.example.demo.entities.Menu;
import com.example.demo.entities.MenuSubscription;
import com.example.demo.entities.MessSubscription;
import com.example.demo.services.MenuService;
import com.example.demo.services.MenuSubscriptionService;
import com.example.demo.services.MessSubscriptionService;

@RestController
//@CrossOrigin(origins = "http//localhost:3000")
public class MenuSubscriptionController {

	@Autowired
	MenuSubscriptionService menusubservice;

	@Autowired
	MessSubscriptionService msbservice;

	@Autowired
	MenuService menuservice;

	@PostMapping("/SaveMenuSub")
	public MenuSubscription saveMenuSub(@RequestBody MenuSubscriptionDao menudao) 
	{
		MessSubscription ms = msbservice.getMessSubid(menudao.getMess_subscription_id());

		Menu m = menuservice.getMenuSubid(menudao.getMenu_id());

		MenuSubscription mn = new MenuSubscription(ms, m , menudao.getQuantity());

		return menusubservice.saveMenuSub(mn);
	}

}
