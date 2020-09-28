package it.server.service;

import java.time.LocalDateTime;
import java.util.List;

import it.server.domain.Prenotazione;

public interface PrenotazioneService {
	
	List<Prenotazione> findPrenotazioni();
	List<Prenotazione> findPrenotazioneByDataSvolgimentoAttivita(LocalDateTime dataSvolgimentoAttivita);
	Prenotazione storePrenotazione(Prenotazione prenotazione);
	Prenotazione updatePrenotazione(Integer id, Prenotazione prenotazione);
	Prenotazione deletePrenotazione(Integer id);

}
