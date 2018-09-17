package com.project.librairie.entities;

import javax.persistence.*;


@Entity
public class Livre {
	@Id @GeneratedValue
	private Long id;
	private String titre;
	private String auteur;
	private String description ;
	public Long getId() {
		return id;
	}
	
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getAuteur() {
		return auteur;
	}
	public void setAuteur(String auteur) {
		this.auteur = auteur;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
}