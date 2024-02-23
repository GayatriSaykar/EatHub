package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Menu;
import com.example.demo.entities.MenuSubscription;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface MenuSubscriptionRepository extends JpaRepository<MenuSubscription, Integer>{
	
	
     @Query("select m from MenuSubscription m ")
     public List<MenuSubscription> getMenuSubscription();
}
