package it.server.service;

import java.util.List;

import it.server.domain.Attivita;

public interface AttivitaService {
	
	List<Attivita> findAllAttivita();
	List<Attivita> findAttivitaHome();
	List<Attivita> findAttivitaByTipologia(String tipologia);
	List<Attivita> findAttivitaByLuogo(String luogo);
	Attivita findAttivitaById(Integer id);
	Attivita storeAttivita(Attivita attivita);
	void deleteAttivitaById(Integer id);

}
