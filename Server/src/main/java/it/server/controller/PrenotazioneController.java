package it.server.controller;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.server.domain.Prenotazione;
import it.server.domain.Turista;
import it.server.service.PrenotazioneService;
import it.server.service.TuristaService;
//import it.server.utility.WhatsAppMessageSender;

@RestController
@CrossOrigin
@RequestMapping("/prenotazioni")
public class PrenotazioneController {

	@Autowired
	private PrenotazioneService prenotazioneService;
	@Autowired
	private TuristaService turistaService;
	// @Autowired
	// private WhatsAppMessageSender whatsAppMessageSender;

	@GetMapping
	public ResponseEntity<List<Prenotazione>> getPrenotazioni(@RequestParam(name = "data", required = false) String data)
			throws ParseException {
		if (data != null) {
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
			LocalDate date = LocalDate.parse(data, formatter);
			List<Prenotazione> prenotazioni = prenotazioneService.findPrenotazioni();
			List<Prenotazione> prenotazioniFiltrate = new ArrayList<Prenotazione>();
			for (Prenotazione prenotazione : prenotazioni) {
				if (prenotazione.getDataSvolgimentoAttivita().isAfter(date) || prenotazione.getDataSvolgimentoAttivita().equals(date)) {
					prenotazioniFiltrate.add(prenotazione);
				}
			}
			return new ResponseEntity<List<Prenotazione>>(prenotazioniFiltrate, HttpStatus.OK);
		}else{
			List<Prenotazione> prenotazioni = prenotazioneService.findPrenotazioni();
			return new ResponseEntity<List<Prenotazione>>(prenotazioni, HttpStatus.OK);
		}

	}

	@PostMapping
	public ResponseEntity<Prenotazione> storePrenotazione(@RequestBody Prenotazione prenotazione) {

		Turista turista = turistaService
				.findTuristaByRecapitoTelefonico(prenotazione.getTuristaPrenotante().getRecapitoTelefonico());
		if (turista != null && turista.getNome().equals(prenotazione.getTuristaPrenotante().getNome())) {
			prenotazione.setTuristaPrenotante(turista);
			// whatsAppMessageSender.sendMessage(prenotazione);
			return new ResponseEntity<Prenotazione>(prenotazioneService.storePrenotazione(prenotazione),
					HttpStatus.CREATED);
		} else {
			Turista turistaSalvato = turistaService.storeTurista(prenotazione.getTuristaPrenotante());
			prenotazione.setTuristaPrenotante(turistaSalvato);
			// whatsAppMessageSender.sendMessage(prenotazione);
			return new ResponseEntity<Prenotazione>(prenotazioneService.storePrenotazione(prenotazione),
					HttpStatus.CREATED);
		}

	}

}
