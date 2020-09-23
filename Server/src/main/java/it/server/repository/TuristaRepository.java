package it.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import it.server.domain.Turista;

public interface TuristaRepository extends JpaRepository<Turista, Integer>{

	Turista findByRecapitoTelefonico(String recapitoTelefonico);

}
