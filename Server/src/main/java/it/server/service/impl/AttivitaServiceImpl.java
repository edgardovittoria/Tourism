package it.server.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.server.domain.Attivita;
import it.server.repository.AttivitaRepository;
import it.server.service.AttivitaService;

@Service
@Transactional
public class AttivitaServiceImpl implements AttivitaService{
	
	@Autowired
	private AttivitaRepository attivitaRepository;

	@Override
	public List<Attivita> findAllAttivita() {
		return attivitaRepository.findAll();
	}

	@Override
	public List<Attivita> findAttivitaByTipologia(String tipologia) {
		return attivitaRepository.findByTipologia(tipologia);
	}

	@Override
	public Attivita findAttivitaById(Integer id) {
		return attivitaRepository.getOne(id);
	}

	@Override
	public Attivita storeAttivita(Attivita attivita) {
		return attivitaRepository.save(attivita);
	}

	@Override
	public void deleteAttivitaById(Integer id) {
		attivitaRepository.deleteById(id);
	}

	@Override
	public List<Attivita> findAttivitaByLuogo(String luogo) {
		return attivitaRepository.findByLuogo(luogo);
	}

}
