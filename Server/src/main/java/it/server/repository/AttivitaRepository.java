package it.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import it.server.domain.Attivita;

public interface AttivitaRepository extends JpaRepository<Attivita, Integer>{

	List<Attivita> findByTipologia(String tipologia);
	List<Attivita> findByLuogo(String luogo);
	
	
}
