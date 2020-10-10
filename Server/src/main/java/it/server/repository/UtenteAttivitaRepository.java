package it.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import it.server.domain.UtenteAttivita;

public interface UtenteAttivitaRepository extends JpaRepository<UtenteAttivita, Integer>{
    UtenteAttivita findByUsername(String username);
}
