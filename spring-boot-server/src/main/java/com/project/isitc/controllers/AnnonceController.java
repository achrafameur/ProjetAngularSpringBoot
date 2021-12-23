package com.project.isitc.controllers;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.isitc.models.Annonce;
import com.project.isitc.repository.AnnonceRepository;
import com.project.isitc.services.gestionAnnonce;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/annonces")
public class AnnonceController {
	
	@Autowired
	AnnonceRepository ar;
	@Autowired
	gestionAnnonce ga;
	
	@PostMapping("/add")
	public void addAnnonce (@Valid @RequestBody Annonce a) {
		ar.save(a);
	} 
	@GetMapping("/all")
	public List<Annonce> getAllAnnonces () {
		return ar.findAll();
	}
	@GetMapping("/me/{nameU}")
	public List<Annonce> getMyAnnonces (@PathVariable("nameU") String nameU) {
		return ar.rechercherAnnoncesParUsernameUser(nameU);
	}
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id") int id) {
		ar.deleteById(id);
	}
	@GetMapping("/annonce/{id}")
	public Annonce productById(@PathVariable("id") int id ){
		return ar.findById(id).get();
	}
	
	@GetMapping("/getannonce/{mc}")
	public List<Annonce> ProductByMC(@PathVariable("mc") String mot ){
		return ar.findByTitleContains(mot);
	} 
//	@PostMapping("/update/{id}")
//	public void updateAnnonce (@PathVariable("id") int id) {
//		ar.save(a);
//	} 
	
	
	@GetMapping(path="/getImage/{id}",produces=MediaType.IMAGE_JPEG_VALUE)
	public byte[] getImage(@PathVariable("id") int id ) throws IOException{
		return ga.getImage(id);
	}
	
	
}
