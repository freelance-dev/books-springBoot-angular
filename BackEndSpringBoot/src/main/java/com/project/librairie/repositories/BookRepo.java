package com.project.librairie.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.project.librairie.entities.Livre;

@RepositoryRestResource
@Repository
@CrossOrigin
public interface BookRepo extends   JpaRepository<Livre, Long> {
	

	
}
