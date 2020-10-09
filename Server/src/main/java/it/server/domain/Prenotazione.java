package it.server.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "prenotazioni")
public class Prenotazione {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private Integer numeroPartecipanti;
	@Column
	private Float costoTotale;
	//@Column
	//private Boolean aperta;
	@Column
	private Boolean pagata;
	@Column
	private Boolean servizioFotografico;
	@ManyToOne
	@JoinColumn(name = "id_turista_prenotante", nullable = false)
	private Turista turistaPrenotante;
	@Column
	private Integer postiDisponibili;
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDate dataSvolgimentoAttivita;
	@Column
	@JsonFormat(pattern="HH:mm")
	private LocalTime oraSvolgimentoAttivita;
	@Column
	@JsonFormat(pattern="yyyy-MM-dd HH:mm")
	private LocalDateTime dataDiPrenotazione;
	@ManyToOne
	@JoinColumn(name = "id_attivita_prenotata", nullable = false)
	private Attivita attivitaPrenotata;

	public Prenotazione() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getNumeroPartecipanti() {
		return numeroPartecipanti;
	}

	public void setNumeroPartecipanti(Integer numeroPartecipanti) {
		this.numeroPartecipanti = numeroPartecipanti;
	}

	public Float getCostoTotale() {
		return costoTotale;
	}

	public void setCostoTotale(Float costoTotale) {
		this.costoTotale = costoTotale;
	}

	/*public Boolean getAperta() {
		return aperta;
	}

	public void setAperta(Boolean aperta) {
		this.aperta = aperta;
	}*/

	public Boolean getPagata() {
		return pagata;
	}

	public void setPagata(Boolean pagata) {
		this.pagata = pagata;
	}

	public Boolean getServizioFotografico() {
		return servizioFotografico;
	}

	public void setServizioFotografico(Boolean servizioFotografico) {
		this.servizioFotografico = servizioFotografico;
	}

	public Turista getTuristaPrenotante() {
		return turistaPrenotante;
	}

	public void setTuristaPrenotante(Turista turistaPrenotante) {
		this.turistaPrenotante = turistaPrenotante;
	}

	public Integer getPostiDisponibili() {
		return postiDisponibili;
	}

	public void setPostiDisponibili(Integer postiDisponibili) {
		this.postiDisponibili = postiDisponibili;
	}

	public LocalDate getDataSvolgimentoAttivita() {
		return dataSvolgimentoAttivita;
	}

	public void setDataSvolgimentoAttivita(LocalDate dataSvolgimentoAttivita) {
		this.dataSvolgimentoAttivita = dataSvolgimentoAttivita;
	}

	public LocalTime getOraSvolgimentoAttivita() {
		return oraSvolgimentoAttivita;
	}

	public void setOraSvolgimentoAttivita(LocalTime oraSvolgimentoAttivita) {
		this.oraSvolgimentoAttivita = oraSvolgimentoAttivita;
	}

	public LocalDateTime getDataDiPrenotazione() {
		return dataDiPrenotazione;
	}

	public void setDataDiPrenotazione(LocalDateTime dataDiPrenotazione) {
		this.dataDiPrenotazione = dataDiPrenotazione;
	}
	
	public Attivita getAttivitaPrenotata() {
		return attivitaPrenotata;
	}
	
	public void setAttivitaPrenotata(Attivita attivitaPrenotata) {
		this.attivitaPrenotata = attivitaPrenotata;
	}

}
