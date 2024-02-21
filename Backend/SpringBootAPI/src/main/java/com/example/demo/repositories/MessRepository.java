package com.example.demo.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.Mess;

@Repository
public interface MessRepository extends JpaRepository<Mess,Integer>  {

	 @Query("SELECT m FROM Mess m WHERE LOWER(m.area) LIKE LOWER(:area)")
	    List<Mess> findByArea(@Param("area") String area);
	
	 @Query("select m from Mess m where m.logins = :log ")
		public Mess getMess(Login log );
	 
//	 Optional<Mess> findByMessIdAndDeletedFalse(int mess_id);
	 

}


//package com.example.demo.repositories;
//
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import com.example.demo.entities.Login;
//import com.example.demo.entities.Mess;
//
//@Repository
//public interface MessRepository extends JpaRepository<Mess, Integer> {
//
//	@Query("select m from Mess m where m.logins = :log ")
//	public Mess getMess(Login log );
//	
//	@Query("SELECT m FROM Mess m WHERE LOWER(m.city) LIKE LOWER(:city)")
//    List<Mess> findByCity(@Param("city") String city);
//
//}
