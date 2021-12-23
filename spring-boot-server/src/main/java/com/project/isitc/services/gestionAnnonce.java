package com.project.isitc.services;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.isitc.models.Annonce;
import com.project.isitc.repository.AnnonceRepository;

@Service
public class gestionAnnonce implements IGestion {

	@Autowired
	AnnonceRepository ar;
	
	@Override
	public byte[] getImage(int Idannonce) throws IOException {
		// TODO Auto-generated method stub
		String photo = getAnnonce(Idannonce).getTitle();
		File f= new File(System.getProperty("user.home"));
		Path p = Paths.get(f+"/image/"+photo+".jpg");
		return Files.readAllBytes(p);
	}

	@Override
	public Annonce getAnnonce(int id) {
		// TODO Auto-generated method stub
		return ar.findById(id).get();
	}

}
