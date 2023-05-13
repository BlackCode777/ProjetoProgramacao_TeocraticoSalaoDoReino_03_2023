package com.rotinaadminsalaoreinobackend.RotinaAdminSalaoReinoBackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rotinaadminsalaoreinobackend.RotinaAdminSalaoReinoBackend.model.PublicadorDoReino;

@RestController
@Component
@RequestMapping( value = "/publicadorDoReino" )
public class RotinaAdminController {
	
	@GetMapping( value = "/", produces = "application/json" )
	public ResponseEntity<PublicadorDoReino> initRote(  ) {
		//System.out.println(" PARAMETRO >>>  "+nome);
		
		PublicadorDoReino publicador = new PublicadorDoReino();
		publicador.setNome("Anderson");
		publicador.setEmail("Anderson@Anderson");
		
		return new ResponseEntity<PublicadorDoReino>(publicador, HttpStatus.OK);
	}

	
	
}
