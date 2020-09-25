package it.server.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import it.server.domain.Prenotazione;

public interface PrenotazioneRepository extends JpaRepository<Prenotazione, Integer>{

	List<Prenotazione> findByDataSvolgimentoAttivita(LocalDateTime dataSvolgimentoAttivita);
	
}
