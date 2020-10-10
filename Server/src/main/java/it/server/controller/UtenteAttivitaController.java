package it.server.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.server.domain.UtenteAttivita;
import it.server.security.JWTTokenUtil;
import it.server.service.UtenteAttivitaService;
import it.server.security.UserDetailsImpl;


@RestController
@CrossOrigin
@RequestMapping("/admin")
public class UtenteAttivitaController {
    
    @Autowired
    private UtenteAttivitaService utenteAttivitaService;

    @Value("${jwt.header}")
	private String tokenHeader;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
    private JWTTokenUtil jwtTokenUtil;
    
    @Autowired
	private PasswordEncoder passwordEncoder;


	@PostMapping("/login")
	public UtenteAttivita login(@RequestBody AuthenticationRequest authenticationRequest, HttpServletResponse response) throws AuthenticationException {
		// Effettuo l'autenticazione
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);

		// Genero Token e lo inserisco nell'header di risposta
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		String token = jwtTokenUtil.generateToken(userDetails);
		response.setHeader(tokenHeader, token);

		// Ritorno l'utente
		return ((UserDetailsImpl) userDetails).getUtente();
	}

    @PostMapping
    public ResponseEntity<UtenteAttivita> storeUtenteAttivita(@RequestBody UtenteAttivita utenteAttivita){
        utenteAttivita.setPassword(passwordEncoder.encode(utenteAttivita.getPassword()));
        return new ResponseEntity<UtenteAttivita>(utenteAttivitaService.storeUtenteAttivita(utenteAttivita), HttpStatus.CREATED);
    }
}
