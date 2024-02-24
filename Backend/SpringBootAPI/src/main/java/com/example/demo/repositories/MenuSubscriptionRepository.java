package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Menu;
import com.example.demo.entities.MenuSubscription;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface MenuSubscriptionRepository extends JpaRepository<MenuSubscription, Integer>{
	
	 @Query("select m from MenuSubscription m ")
     public List<MenuSubscription> getMenuSubscription();

//     @Query("select m from Menusubscription,Menu where mess_subscription_id = :m.mess_subscription_id and menu_id=:m.menu_id")
//     public List<MenuSubscription> getMenuSubscription();
//	@Query("SELECT ms FROM MenuSubscription ms, Menu m " +
//	           "WHERE ms.messSubscriptionId = m.messSubscriptionId " +
//	           "AND ms.menuId = m.menuId")
//	    List<MenuSubscription> findByMessSubscriptionIdAndMenuId(@Param("messSubscriptionId") int messSubscriptionId,
//	                                                             @Param("menuId") int menuId);
    
}
