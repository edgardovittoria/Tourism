package it.server.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import it.server.domain.UtenteAttivita;
import it.server.service.UtenteAttivitaService;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UtenteAttivitaService service;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UtenteAttivita utente = service.findUtenteAttivitaByUsername(username);
		if (utente == null) {
			throw new UsernameNotFoundException("utente inesistente");
		}
		return new UserDetailsImpl(utente);

	}

}
