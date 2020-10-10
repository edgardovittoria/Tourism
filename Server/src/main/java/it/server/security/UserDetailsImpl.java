package it.server.security;


import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import it.server.domain.UtenteAttivita;

import com.fasterxml.jackson.annotation.JsonIgnore;


@SuppressWarnings("serial")
public class UserDetailsImpl implements UserDetails {

	private UtenteAttivita utente;

	public UserDetailsImpl(UtenteAttivita utente) {
		this.utente = utente;
	}

	@Override
	public String getUsername() {
		return utente.getUsername();
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@JsonIgnore
	@Override
	public String getPassword() {
		return utente.getPassword();
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> result = new ArrayList<>();
        
        GrantedAuthorityImpl authorityImpl = new GrantedAuthorityImpl("utenteAttivita");
        result.add(authorityImpl);

		return result;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public UtenteAttivita getUtente() {
		return utente;
	}

}