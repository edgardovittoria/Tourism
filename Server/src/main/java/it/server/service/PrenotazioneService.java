package it.server.service;

import java.time.LocalDateTime;
import java.util.List;

import it.server.domain.Prenotazione;
import it.server.exception.BusinessException;

public interface PrenotazioneService {
	
	List<Prenotazione> findPrenotazioni() throws BusinessException;
	List<Prenotazione> findPrenotazioneByDataSvolgimentoAttivita(LocalDateTime dataSvolgimentoAttivita) throws BusinessException;
	Prenotazione storePrenotazione(Prenotazione prenotazione) throws BusinessException;
	Prenotazione updatePrenotazione(Integer id, Prenotazione prenotazione) throws BusinessException;
	Prenotazione deletePrenotazione(Integer id) throws BusinessException;

}
