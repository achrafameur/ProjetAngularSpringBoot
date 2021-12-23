package com.project.isitc.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.isitc.models.Annonce;
import com.project.isitc.models.Role;
import com.project.isitc.models.User;
import com.project.isitc.repository.AnnonceRepository;
import com.project.isitc.repository.RoleRepository;
import com.project.isitc.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class AdminController {
	
	@Autowired
	UserRepository userRepository;
	@Autowired
	RoleRepository roleRepository ;
	@Autowired
	AnnonceRepository ar;
	
	@GetMapping("/all")
	public List<Role> getAllRoles(){
		return roleRepository.findAll();
	} 
	
	@GetMapping("/allusers")
	public List<User> getAllUsers(){
		 return userRepository.findAll();
	} 
	
	@DeleteMapping("/deluser/{id}")
	public void deleteUser(@PathVariable("id") long id){
		 userRepository.deleteById(id);
	} 
	
	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable("id") long id){
		 return userRepository.findById(id).get();
	}
	
	@GetMapping("/accept/{id}")
	public void acceptAnnonce(@PathVariable("id") int id){
		Annonce a = ar.findById(id).get();
		a.setStatus("Accepted");
		ar.save(a);
	}

}
