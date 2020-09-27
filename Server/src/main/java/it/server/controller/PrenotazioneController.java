package it.server.controller;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.server.domain.Prenotazione;
import it.server.domain.Turista;
import it.server.service.impl.PrenotazioneServiceImpl;
import it.server.service.impl.TuristaServiceImpl;

@RestController
@CrossOrigin
@RequestMapping("/prenotazioni")
public class PrenotazioneController {

	@Autowired
	private PrenotazioneServiceImpl prenotazioneServiceImpl;
	@Autowired
	private TuristaServiceImpl turistaServiceImpl;
	
	@GetMapping
	public ResponseEntity<List<Prenotazione>> getPrenotazioni(){
		List<Prenotazione> prenotazioni = prenotazioneServiceImpl.findPrenotazioni();
		return new ResponseEntity<List<Prenotazione>>(prenotazioni, HttpStatus.OK);
	}
	
	
	@GetMapping("{data}")
	public ResponseEntity<List<Prenotazione>> getPrenotazioniByDataSvolgimento(
			@PathVariable("data") String data) throws ParseException{
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
		LocalDateTime date = LocalDateTime.parse(data, formatter);
		List<Prenotazione> prenotazioni = prenotazioneServiceImpl.findPrenotazioneByDataSvolgimentoAttivita(date);
		return new ResponseEntity<List<Prenotazione>>(prenotazioni, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Prenotazione> storePrenotazione(
			@RequestBody Prenotazione prenotazione){
		
		Turista turista = turistaServiceImpl.findTuristaByRecapitoTelefonico(prenotazione.getTuristaPrenotante().getRecapitoTelefonico());
				
		if(turista != null && turista.getNome().equals(prenotazione.getTuristaPrenotante().getNome())) {
			prenotazione.setTuristaPrenotante(turista);
			return new ResponseEntity<Prenotazione>(prenotazioneServiceImpl.storePrenotazione(prenotazione), HttpStatus.CREATED);
		}else {
			Turista turistaSalvato = turistaServiceImpl.storeTurista(prenotazione.getTuristaPrenotante());
			prenotazione.setTuristaPrenotante(turistaSalvato);
			return new ResponseEntity<Prenotazione>(prenotazioneServiceImpl.storePrenotazione(prenotazione), HttpStatus.CREATED);
		}
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Prenotazione> updatePrenotazione(
			@PathVariable("id") Integer id,
			@RequestBody Prenotazione prenotazione){
		
		Prenotazione prenotazioneModificata = prenotazioneServiceImpl.updatePrenotazione(id, prenotazione);
		return new ResponseEntity<Prenotazione>(prenotazioneModificata, HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Void> deletePrenotazione(@PathVariable("id") Integer id){
		prenotazioneServiceImpl.deletePrenotazione(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		
	}
}
