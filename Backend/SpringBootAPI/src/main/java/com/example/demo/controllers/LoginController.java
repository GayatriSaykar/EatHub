package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.LoginDao;
import com.example.demo.entities.Login;

import com.example.demo.services.LoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

	@Autowired
	LoginService logservice;

//	@PostMapping("/checklogin")
//	public Login checkLogin(@RequestBody LoginDao ld) {
//		try {
//			System.out.print(ld);
//			return lservice.checkLogin(ld.getUsername(), ld.getPassword());
//		} catch (Exception e) {
//			e.printStackTrace();
//			return null;
//		}
//	}

//	----------------------------------------------------------------------------

	@PostMapping("/checklogin")
	public ResponseEntity<Login> checkLogin(@RequestBody LoginDao ld)
	{

		Login login = logservice.checkLogin(ld.getUsername(), ld.getPassword());
		if (login != null)
			return ResponseEntity.status(HttpStatus.OK).body(login);
		else
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
	}

	@PostMapping("/login")
	public ResponseEntity<String> registerLogin(@RequestBody Login loginData) {
		try {
			// Save the login data
			System.out.println("login successfull");
			System.out.println(loginData);
			

			Login saveLogin = logservice.saveLogin(loginData);
			System.out.println("Saved");

			return ResponseEntity.ok("Login data registered successfully!");
		   }
		catch (Exception e)
		{
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("An error occurred during login data registration.");
		}
	}

	public LoginController(LoginService loginService) 
	{
		this.logservice = loginService;
	}
	
//	@GetMapping("/approve")
//	public int approveMess(@RequestParam("login_id") int login_id )
//	{
//		return logservice.ApproveMess();
//	}


	@PutMapping("/approve/{login_id}")
	public ResponseEntity<Void> approveLogin(@PathVariable("login_id") int login_id) 
	{
		logservice.ApproveMess(login_id);
		return ResponseEntity.ok().build();
	}

	@PutMapping("/reject/{login_id}")
	public ResponseEntity<Void> rejectLogin(@PathVariable("login_id") int login_id)
	{
		logservice.rejectMess(login_id);
		return ResponseEntity.ok().build();
	}
}
	
// ---------------------------------------------------------------------------------------


//	@PostMapping("/checkLogin")                              --->>> Mahesh 
//    public Login checkLogin(@RequestBody LoginDao lr)
//    {
//		//System.out.println("lr"+lr);
//    	
//    	
//    	//System.out.println(lr.getUname());
//    	Login L=lservice.getLoginByUsername(lr.getUname());
//    	
//    	System.out.println(L.getRole().getRole_id());
//    	if(L.getRole().getRole_id()==1)
//    	{
//    		return L;
//    	}
//    	else if(L.getRole().getRole_id()==2)
//    	{
//    		
//    	}
//    	else if(L.getRole().getRole_id()==3)
//    	{
//    		
//    	}
//    	//System.out.println("lgid"+L.getLoginid());
//    	
//    	//return L;
////    	if(L.getPassword().equals(lr.getPass()))
////    	{
////    		//return Role id of that user
////    		Role r = L.getRole();
////    		//System.out.println();
////    		//Condition for service provider whos request still not accepted
////    		
////    		
//////    		if(r.getRole_id()== 2)
//////    		{
//////    			ServiceProvider sp = spservice.getUserByLoginId(L);
//////    			System.out.println("sp "+sp);
//////    			
//////    		}
////    		if(r.getRole_id()== 2)
////    		{
////    			ServiceProvider sp = spservice.getUserByLoginId(L);
////    			System.out.println("sp "+sp);
////
////    			
////    		}
////    		return r.getRole_id();
//       	//}
////    	else
////    	{
////    		return -1;
////    		//return "Invalid Credentials";
////    	}
//    	
//    	//User logged=uservice.getUserByLoginId(u.getLoginid());
//    	//return logged;
//    	return L; 
//    }
