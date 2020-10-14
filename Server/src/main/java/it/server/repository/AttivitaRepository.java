package it.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import it.server.domain.Attivita;
import it.server.domain.UtenteAttivita;

public interface AttivitaRepository extends JpaRepository<Attivita, Integer>{

	List<Attivita> findByTipologia(String tipologia);
	List<Attivita> findByLuogo(String luogo);
	List<Attivita> findByHomePage(Boolean homePage);
	Attivita findByUtenteAttivita(UtenteAttivita utenteAttivita);
	
	
}
