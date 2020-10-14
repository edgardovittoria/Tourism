package it.server.service;

import java.time.LocalDate;
import java.util.List;

import it.server.domain.Attivita;
import it.server.domain.Prenotazione;
import it.server.exception.BusinessException;

public interface PrenotazioneService {
	
	List<Prenotazione> findPrenotazioni() throws BusinessException;
	List<Prenotazione> findPrenotazioneByDataSvolgimentoAttivita(LocalDate dataSvolgimentoAttivita) throws BusinessException;
	List<Prenotazione> findPrenotazioneByAttivita(Attivita attivita);
	Prenotazione storePrenotazione(Prenotazione prenotazione) throws BusinessException;
	Prenotazione updatePrenotazione(Integer id, Prenotazione prenotazione) throws BusinessException;
	Prenotazione deletePrenotazione(Integer id) throws BusinessException;

}
