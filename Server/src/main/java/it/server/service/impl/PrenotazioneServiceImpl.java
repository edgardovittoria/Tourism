package it.server.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.server.domain.Prenotazione;
import it.server.repository.PrenotazioneRepository;
import it.server.service.PrenotazioneService;

@Service
@Transactional
public class PrenotazioneServiceImpl implements PrenotazioneService{
	
	@Autowired
	private PrenotazioneRepository prenotazioneRepository;
	
	@Override
	public List<Prenotazione> findPrenotazioni() {
		return prenotazioneRepository.findAll();
	}

	@Override
	public List<Prenotazione> findPrenotazioneByDataSvolgimentoAttivita(LocalDateTime dataSvolgimentoAttivita) {
		return prenotazioneRepository.findByDataSvolgimentoAttivita(dataSvolgimentoAttivita);
	}

	@Override
	public Prenotazione storePrenotazione(Prenotazione prenotazione) {
		return prenotazioneRepository.save(prenotazione);
	}

	@Override
	public Prenotazione updatePrenotazione(Integer id, Prenotazione prenotazione) {
		Prenotazione prenotazioneDaModificare = prenotazioneRepository.getOne(id);
		
		//prenotazioneDaModificare.setAperta(prenotazione.getAperta());
		prenotazioneDaModificare.setCostoTotale(prenotazione.getCostoTotale());
		prenotazioneDaModificare.setDataDiPrenotazione(prenotazione.getDataDiPrenotazione());
		prenotazioneDaModificare.setServizioFotografico(prenotazione.getServizioFotografico());
		prenotazioneDaModificare.setAttivitaPrenotata(prenotazione.getAttivitaPrenotata());
		prenotazioneDaModificare.setDataSvolgimentoAttivita(prenotazione.getDataSvolgimentoAttivita());
		prenotazioneDaModificare.setNumeroPartecipanti(prenotazione.getNumeroPartecipanti());
		prenotazioneDaModificare.setPagata(prenotazione.getPagata());
		prenotazioneDaModificare.setPostiDisponibili(prenotazione.getPostiDisponibili());
		prenotazioneDaModificare.setTuristaPrenotante(prenotazione.getTuristaPrenotante());
		
		return prenotazioneRepository.save(prenotazioneDaModificare);
	}

	@Override
	public Prenotazione deletePrenotazione(Integer id) {
		Prenotazione prenotazione = prenotazioneRepository.getOne(id);
		prenotazioneRepository.deleteById(id);
		return prenotazione;
	}


}
