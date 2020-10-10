package it.server.domain;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "attivita")
public class Attivita {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column
	private String nome;
	@Column
	private Float costo;
	@Column
	private String tipologia;
	@Column
	@Lob
	private String image;
	@Column
	@Lob
	private String descrizione;
	@Column
	private String luogo;
	@Column
	private Boolean homePage;
	@ManyToOne
	@JoinColumn(name = "id_utente_attivita", nullable = false)
	private UtenteAttivita utenteAttivita;

	public Attivita() {

	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Float getCosto() {
		return costo;
	}

	public void setCosto(Float costo) {
		this.costo = costo;
	}

	public String getTipologia() {
		return tipologia;
	}

	public void setTipologia(String tipologia) {
		this.tipologia = tipologia;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public String getLuogo() {
		return luogo;
	}

	public void setLuogo(String luogo) {
		this.luogo = luogo;
	}

	public Boolean getHomePage() {
		return homePage;
	}

	public void setHomePage(Boolean homePage) {
		this.homePage = homePage;
	}

	public UtenteAttivita getUtenteAttivita() {
		return utenteAttivita;
	}

	public void setUtenteAttivita(UtenteAttivita utenteAttivita) {
		this.utenteAttivita = utenteAttivita;
	}

	

	
}
