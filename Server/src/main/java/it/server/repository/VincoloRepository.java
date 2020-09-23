package it.server.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import it.server.domain.Vincolo;

public interface VincoloRepository extends JpaRepository<Vincolo, Integer>{

	@Query("SELECT v FROM Vincolo v WHERE v.attivita.id = :id_attivita")
	List<Vincolo> findByAttivitaId(Integer id_attivita);
	
}
