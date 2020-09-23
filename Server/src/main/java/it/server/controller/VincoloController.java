package it.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.server.domain.Vincolo;
import it.server.service.impl.VincoloServiceImpl;

@RestController
@RequestMapping("/vincoli")
public class VincoloController {

	@Autowired
	private VincoloServiceImpl vincoloServiceImpl;
	
	@PostMapping
	public ResponseEntity<Vincolo> storeVincolo(@RequestBody Vincolo vincolo){
		return new ResponseEntity<Vincolo>(vincoloServiceImpl.storeVincolo(vincolo), HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Vincolo>> getVincoliByIdAttivita(
			@RequestParam("id_attivita") Integer id_attivita){
		return new ResponseEntity<List<Vincolo>>(vincoloServiceImpl.getVincoliByAttivita(id_attivita), HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Void> deleteVincolo(@PathVariable("id") Integer id){
		vincoloServiceImpl.deleteVincolo(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
