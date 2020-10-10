package it.server.service;

import it.server.domain.UtenteAttivita;
import it.server.exception.BusinessException;

public interface UtenteAttivitaService {
    UtenteAttivita storeUtenteAttivita(UtenteAttivita utenteAttivita) throws BusinessException;
    UtenteAttivita findUtenteAttivitaByUsername(String username) throws BusinessException;
}
