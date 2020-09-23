package it.server.service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import it.server.domain.Prenotazione;

public interface PrenotazioneService {
	
	List<Prenotazione> findPrenotazioni();
	List<Prenotazione> findPrenotazioneByDataSvolgimentoAttivita(LocalDate dataSvolgimentoAttivita);
	Prenotazione storePrenotazione(Prenotazione prenotazione);
	Prenotazione updatePrenotazione(Integer id, Prenotazione prenotazione);
	void deletePrenotazione(Integer id);

}
