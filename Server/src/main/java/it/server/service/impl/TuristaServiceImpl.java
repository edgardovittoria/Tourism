package it.server.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.server.domain.Turista;
import it.server.repository.TuristaRepository;
import it.server.service.TuristaService;

@Service
@Transactional
public class TuristaServiceImpl implements TuristaService{
	
	@Autowired
	private TuristaRepository turistaRepository;

	@Override
	public Boolean existTurista(Integer id) {
		return turistaRepository.existsById(id);
	}

	@Override
	public Turista storeTurista(Turista turista) {
		return turistaRepository.save(turista);		
	}

	@Override
	public Turista findTuristaByRecapitoTelefonico(String recapitoTelefonico) {
		return turistaRepository.findByRecapitoTelefonico(recapitoTelefonico);
	}

	@Override
	public void deleteTurista(Turista turista) {
		turistaRepository.delete(turista);
		
	}

	@Override
	public Turista updateTurista(Integer id, Turista turista) {
		Turista turistaDaModificareTurista = turistaRepository.getOne(id);
		
		turistaDaModificareTurista.setNome(turista.getNome());
		turistaDaModificareTurista.setRecapitoTelefonico(turista.getRecapitoTelefonico());
		
		return turistaRepository.save(turistaDaModificareTurista);
	}

}
