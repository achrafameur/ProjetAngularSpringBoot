package com.project.isitc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import com.project.isitc.models.Annonce;

@Repository
public interface AnnonceRepository extends JpaRepository<Annonce , Integer>{

	public List<Annonce> findByTitleContains(String mc);
	
	@RestResource(path="/rechAparU")
	@Query("select a from Annonce a where a.user.username=:nameU")
	public List<Annonce> rechercherAnnoncesParUsernameUser(@Param("nameU") String nameU);
	
}
