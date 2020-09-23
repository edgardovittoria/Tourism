package it.server.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.server.domain.Attivita;
import it.server.domain.Vincolo;
import it.server.repository.AttivitaRepository;
import it.server.repository.VincoloRepository;
import it.server.service.VincoloService;

@Service
@Transactional
public class VincoloServiceImpl implements VincoloService{

	@Autowired
	private VincoloRepository vincoloRepository;
	
	@Override
	public List<Vincolo> getVincoliByAttivita(Integer id_attivita) {
		return vincoloRepository.findByAttivitaId(id_attivita);
	}

	@Override
	public Vincolo storeVincolo(Vincolo vincolo) {
		return vincoloRepository.save(vincolo);
	}

	@Override
	public void deleteVincolo(Integer id) {
		vincoloRepository.deleteById(id);
	}

}
