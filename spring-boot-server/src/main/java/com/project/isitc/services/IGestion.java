package com.project.isitc.services;

import java.io.IOException;

import com.project.isitc.models.Annonce;

public interface IGestion {
	public byte[] getImage(int Idannonce) throws IOException;
	public Annonce getAnnonce(int id);
}
