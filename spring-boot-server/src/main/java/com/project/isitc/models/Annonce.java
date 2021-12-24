package com.project.isitc.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


@Entity
@Table(	name = "annonces")
public class Annonce {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	

	@NotBlank
	@Size(max = 20)
	private String title;
	
	@NotBlank
	@Size(max = 500)
	private String description;
	
	@NotBlank
	@Pattern(regexp = "^[0-9]{8}")
	private String numtel;
	
	private String status="waiting";
	
	private String photo ;


	@ManyToOne()
	private User user;
	
	
	public Annonce() {
		super();
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getNumtel() {
		return numtel;
	}
	public void setNumtel(String numtel) {
		this.numtel = numtel;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	

	
	public Annonce(Integer id, @NotBlank @Size(max = 20) String title, @NotBlank @Size(max = 500) String description,
			@NotBlank @Size(min = 8, max = 8) String numtel, String status, User user) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.numtel = numtel;
		this.status = status;
		this.user = user;
	}
	@Override
	public String toString() {
		return "Annonce [id=" + id + ", title=" + title + ", description=" + description + ", numtel=" + numtel
				+ ", photo=" + photo + ", status=" + status + ", user=" + user + "]";
	}

}
