package it.server.service;

import it.server.domain.Turista;
import it.server.exception.BusinessException;

public interface TuristaService {

	Turista findTuristaByRecapitoTelefonico(String recapitoTelefonico) throws BusinessException;
	Turista storeTurista(Turista turista) throws BusinessException;
	Boolean existTurista(Integer id) throws BusinessException;
	Turista updateTurista(Integer id, Turista turista) throws BusinessException;
	void deleteTurista(Turista turista) throws BusinessException;
}
