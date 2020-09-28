package it.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.server.domain.Attivita;
import it.server.service.impl.AttivitaServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/attivita")
public class AttivitaController {
	
	@Autowired
	private AttivitaServiceImpl attivitaServiceImpl;
	
	@PostMapping
	public ResponseEntity<Attivita> storeAttivita(@RequestBody Attivita attivita){
		return new ResponseEntity<Attivita>(attivitaServiceImpl.storeAttivita(attivita), HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Attivita>> getAttivitaByTipologia(
			@RequestParam(required = false, name = "tipologia") String tipologia, 
			@RequestParam(required = false, name = "luogo") String luogo){
		if(tipologia!=null && luogo==null) {
			return new ResponseEntity<List<Attivita>>(attivitaServiceImpl.findAttivitaByTipologia(tipologia), HttpStatus.OK);			
		}else if(tipologia==null && luogo!=null) {
			return new ResponseEntity<List<Attivita>>(attivitaServiceImpl.findAttivitaByLuogo(luogo), HttpStatus.OK);
		}else {
			return new ResponseEntity<List<Attivita>>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Void> deleteAttivita(
			@PathVariable("id") Integer id){
		attivitaServiceImpl.deleteAttivitaById(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	
	

}
