package com.example.demo.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CustomerRegDao {
    
	int cust_id ;        // newly added for updation trial
	String cust_name;
	String cust_address;
	String contactno;
	String email;
	String gender;
	String username;
	String password;
}
