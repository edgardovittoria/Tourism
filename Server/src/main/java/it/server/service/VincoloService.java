package it.server.service;

import java.util.List;

import it.server.domain.Vincolo;

public interface VincoloService {

	List<Vincolo> getVincoliByAttivita(Integer id_attivita);
	Vincolo storeVincolo(Vincolo vincolo);
	void deleteVincolo(Integer id);
}
