package it.server.service;

import it.server.domain.Turista;

public interface TuristaService {

	Turista findTuristaByRecapitoTelefonico(String recapitoTelefonico);
	Turista storeTurista(Turista turista);
	Boolean existTurista(Integer id);
}
