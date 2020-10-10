package it.server.service;

import java.util.List;

import it.server.domain.Vincolo;
import it.server.exception.BusinessException;

public interface VincoloService {

	List<Vincolo> getVincoliByAttivita(Integer id_attivita) throws BusinessException;
	Vincolo storeVincolo(Vincolo vincolo) throws BusinessException;
	void deleteVincolo(Integer id) throws BusinessException;
}
