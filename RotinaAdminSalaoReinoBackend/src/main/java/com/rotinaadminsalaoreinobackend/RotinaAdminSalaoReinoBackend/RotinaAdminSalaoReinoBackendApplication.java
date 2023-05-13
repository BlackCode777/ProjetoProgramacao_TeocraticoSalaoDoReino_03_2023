package com.rotinaadminsalaoreinobackend.RotinaAdminSalaoReinoBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@RestController
@SpringBootApplication
@EnableAutoConfiguration
@EnableTransactionManagement
@EntityScan(basePackages = "com.rotinaadminsalaoreinobackend.RotinaAdminSalaoReinoBackend.model" )
@ComponentScan(basePackages = "rotinaadminsalaoreinobackend.RotinaAdminSalaoReinoBackend.*" )
@EnableJpaRepositories( basePackages = "com.rotinaadminsalaoreinobackend.RotinaAdminSalaoReinoBackend.repository" )
public class RotinaAdminSalaoReinoBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(RotinaAdminSalaoReinoBackendApplication.class, args);
	}

}
