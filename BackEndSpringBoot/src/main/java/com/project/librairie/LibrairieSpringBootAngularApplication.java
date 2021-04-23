package com.project.librairie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
//@EnableJpaRepositories(basePackages ={ "com.project.librairie.repositories"})
//@EntityScan(basePackages ={ "com.project.librairie.entities"})
public class LibrairieSpringBootAngularApplication {

	public static void main(String[] args) {
		System.out.println("test");
	SpringApplication.run(LibrairieSpringBootAngularApplication.class, args);
//		Book book =(Book)applicationContext.getBean(Book.class);
//		
//		BookRepo bookRepo=(BookRepo)	applicationContext.getBean(BookRepo.class);
		
		
	
		
	}
}
