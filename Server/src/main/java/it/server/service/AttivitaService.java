package it.server.service;

import java.util.List;

import it.server.domain.Attivita;
import it.server.domain.UtenteAttivita;
import it.server.exception.BusinessException;

public interface AttivitaService {
	
	List<Attivita> findAllAttivita() throws BusinessException;
	List<Attivita> findAttivitaHome() throws BusinessException;
	List<Attivita> findAttivitaByTipologia(String tipologia) throws BusinessException;
	List<Attivita> findAttivitaByLuogo(String luogo) throws BusinessException;
	Attivita findAttivitaByUtenteAttivita(UtenteAttivita utenteAttivita);
	Attivita findAttivitaById(Integer id) throws BusinessException;
	Attivita storeAttivita(Attivita attivita) throws BusinessException;
	void deleteAttivitaById(Integer id) throws BusinessException;

}
