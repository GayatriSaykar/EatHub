package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CustomerRegDao;
import com.example.demo.dao.MessRegDao;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Mess;
import com.example.demo.entities.Role;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.LoginRepository;
import com.example.demo.repositories.MessRepository;

@Service
public class MessService {
	@Autowired
	MessRepository messrepo;

	@Autowired
	RoleService rs;

	@Autowired
	LoginService logservice;
	
	@Autowired
	LoginRepository lr   ;

	public Mess messRegister(MessRegDao md) {
		Role ro = rs.getRole(3);

		Login lg = new Login(md.getUsername(), md.getPassword(), ro , false);

		lr.save(lg);

		Mess mess = new Mess(md.getMess_name(), md.getOwner_name(), md.getMess_address(),md.getArea(), md.getCity(),
				md.getContactno(), md.getEmail() ,lg );

		return messrepo.save(mess);
	}
	
	public List<Mess> getAllMess() {
        return messrepo.findAll();
    }

    public List<Mess> getMessByArea(String area) {
        return messrepo.findByArea(area);
    }
    

	public Mess getMess(Login log) {
		return messrepo.getMess(log);
  }
	
	
	public void deleteMess(int mess_id) {
        messrepo.deleteById(mess_id);
    }

//	public void softDelete(int mess_id) {
//        Optional<Mess> optionalEntity = messrepo.findById(mess_id);
//        if (optionalEntity.isPresent()) {
//            Mess entity = optionalEntity.get();
//            entity.setDeleted(true);
//            messrepo.save(entity);
//        } else {
//            // Handle not found scenario
//        }
//    }

}

//package com.example.demo.services;
//
//import java.security.AlgorithmConstraints;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.dao.CustomerRegDao;
//import com.example.demo.dao.MessRegDao;
//import com.example.demo.entities.Customer;
//import com.example.demo.entities.Login;
//import com.example.demo.entities.Mess;
//import com.example.demo.entities.Role;
//import com.example.demo.repositories.CustomerRepository;
//import com.example.demo.repositories.LoginRepository;
//import com.example.demo.repositories.MessRepository;
//
//@Service
//public class MessService {
//	@Autowired
//	MessRepository messrepo;
//
//	@Autowired
//	RoleService rs;
//
//	@Autowired
//	LoginService logservice;
//
//	@Autowired
//	LoginRepository lr;
//
//	public Mess messRegister(MessRegDao md) {
//		Role ro = rs.getRole(3);
//
//		Login lg = new Login(md.getUsername(), md.getPassword(), ro , false);
//
//		lr.save(lg);
//
//		Mess mess = new Mess(md.getMess_name(), md.getOwner_name(), md.getMess_address(),md.getArea() , md.getCity(),
//				md.getContactno(), md.getEmail() ,lg );
//
//		return messrepo.save(mess);
//	}
//	// ----------------------------------------------- for display in admin
//
//
//	public Mess getMess(Login log) {
//		return messrepo.getMess(log);
//  }
//	
//	public List<Mess> getAllMess() {
//		return messrepo.findAll();
//	}
//	
//	public List<Mess> getMessByCity(String city) {
//        return messrepo.findByCity(city);
//    }
//	
//}
//
//	
//	
//
