package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "login")
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int login_id;

	@Column
	String username;

	@Column
	String password;

	@JsonIgnoreProperties("role")
	@OneToOne
	@JoinColumn(name = "role_id")
	Role role;

	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Login(int login_id, String username, String password, Role role) {
		super();
		this.login_id = login_id;
		this.username = username;
		this.password = password;
		this.role = role; // object
	}

	public Login(String username, String password, Role ro) {
		this.username = username;
		this.password = password;
		this.role = ro;

	}

	public Role getRole_id() {
		return role;
	}

	public void setRole_id(Role role_id) {
		this.role = role_id;
	}

	public int getLogin_id() {
		return login_id;
	}

	public void setLogin_id(int login_id) {
		this.login_id = login_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
