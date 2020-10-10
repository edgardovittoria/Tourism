package it.server.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.server.domain.UtenteAttivita;
import it.server.repository.UtenteAttivitaRepository;
import it.server.service.UtenteAttivitaService;

@Service
@Transactional
public class UtenteAttivitaServiceImpl implements UtenteAttivitaService {

    @Autowired
    private UtenteAttivitaRepository utenteAttivitaRepository;

    @Override
    public UtenteAttivita storeUtenteAttivita(UtenteAttivita utenteAttivita) {
        return utenteAttivitaRepository.save(utenteAttivita);
    }

    @Override
    public UtenteAttivita findUtenteAttivitaByUsername(String username) {
        return utenteAttivitaRepository.findByUsername(username);
    }
    
}
