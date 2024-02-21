package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.CustomerRegDao;
import com.example.demo.dao.MessRegDao;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Mess;
import com.example.demo.services.CustomerService;
import com.example.demo.services.MessService;

@RestController 
@CrossOrigin(origins = "http://localhost:3000")
public class MessController {

	@Autowired
	MessService mservice;

	@PostMapping("/messregister")
	public Mess messRegister(@RequestBody MessRegDao md) {
		return mservice.messRegister(md);
	}

	@GetMapping("/getallmess")
    public List<Mess> getAllMess() {
        return mservice.getAllMess();
    }

	@GetMapping("/byArea/{area}")
    public List<Mess> getMessByArea(@PathVariable("area")String area) {
        try {
            return mservice.getMessByArea(area);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            throw new RuntimeException("Error processing request");
        }
    }
	
	 @PutMapping("/MessDelete/{mess_id}")
	    public ResponseEntity<String> deleteMess(@PathVariable("mess_id") int mess_id) {
	        mservice.deleteMess(mess_id);
	        return ResponseEntity.ok("Mess deleted successfully");
	    }
	
//	  @PutMapping("/MessDelete/{mess_id}")
//	    public ResponseEntity<String> softDeleteMess(@PathVariable("mess_id") int mess_id) {
//	        mservice.softDeleteMess(mess_id);
//	        return ResponseEntity.ok("Mess soft deleted successfully");
//	    }
}






//package com.example.demo.controllers;
//
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.dao.CustomerRegDao;
//import com.example.demo.dao.MessRegDao;
//import com.example.demo.entities.Customer;
//import com.example.demo.entities.Login;
//import com.example.demo.entities.Mess;
//import com.example.demo.services.CustomerService;
//import com.example.demo.services.LoginService;
//import com.example.demo.services.MessService;
//import com.example.demo.services.RoleService;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//public class MessController {
//
//	@Autowired
//	MessService mservice;
//
//	@Autowired
//	RoleService roleservice;
//	
//	@Autowired
//	LoginService logservice ;
//
//	@PostMapping("/messregister")
//	public Mess messRegister(@RequestBody MessRegDao md) {
//		return mservice.messRegister(md);
//	}
//	
//	@GetMapping("/getmess")
//	public Mess getMess(@RequestParam("login_id") int login_id) {
//		Login l= logservice.getById(login_id);
//		return mservice.getMess(l);
//	}
//	
//	@GetMapping("/getallmess")
//    public ResponseEntity<List<Mess>> getAllMess() 
//	{
//        List<Mess> allmess = mservice.getAllMess();
//        return ResponseEntity.ok().body(allmess);
//    }
//	@GetMapping("/byCity/{city}")
//    public List<Mess> getMessByCity(@PathVariable("city")String city) {
//        try {
//            return mservice.getMessByCity(city);
//        } catch (Exception e) {
//            e.printStackTrace(); // Log the exception
//            throw new RuntimeException("Error processing request");
//        }
//    }
//}
// ------------------------------------------------ for display in admin

//	@GetMapping("/getMess")
//	public ResponseEntity<List<Map<String, Object>>> getAllmess() {
//		List<Map<String, Object>> messData = new ArrayList<>();
//		List<Mess> messowners = mservice.getallmess();
//
//		for (Mess mess : messowners) 
//		{
//			Map<String, Object> vendorMap = new HashMap<>();
//			vendorMap.put("login_id", mess.getLogin_id());
//			vendorMap.put("user_name", mess.getLogin_id().getUsername());
//			vendorMap.put("mess_name", mess.getMess_name());
//			vendorMap.put("owner_name", mess.getOwner_name());
//			vendorMap.put("email", mess.getEmail());
//			vendorMap.put("mess_vaddress", mess.getMess_address());
//			vendorMap.put("contactno", mess.getContactno());
//			vendorMap.put("status", mess.getLogin_id().getStatus());
//			messData.add(vendorMap);
//       }
//		System.out.println(messData);
//		return ResponseEntity.ok().body(messData);
//	}

//	@GetMapping("/getMess")
//	public List<Mess> getMess() {
//		System.out.println("in mess constroller");
//		return mservice.getMess();
//	}
//
//	@GetMapping("/ApproveMess")
//	public int approveMess(@RequestParam int mess_id) {
//		return mservice.approvemess(mess_id);
//	}
//
//	@GetMapping("/BlockMess")
//	public int blockMess(@RequestParam int mess_id) {
//		return mservice.blockmess(mess_id);
//	}

