package it.server.utility;

import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import it.server.domain.Prenotazione;

@Service
public class WhatsAppMessageSender {

	public static final String ACCOUNT_SID = "ACa8ebbcc93cfc2f2f1bbfba7cc66bedb0";
	public static final String AUTH_TOKEN = "1159bf56f809ec602860aac4bb1d935e";
	
	public void sendMessage(Prenotazione prenotazione) {
		
		String numeroTelefonico = prenotazione.getTuristaPrenotante().getRecapitoTelefonico();
		String turista = prenotazione.getTuristaPrenotante().getNome();
		String attivita = prenotazione.getAttivitaPrenotata().getNome();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
		DateTimeFormatter formatterOra = DateTimeFormatter.ofPattern("HH:mm");
		String data = prenotazione.getDataSvolgimentoAttivita().format(formatter);
		String ora = prenotazione.getDataSvolgimentoAttivita().format(formatterOra);
		String luogo = prenotazione.getAttivitaPrenotata().getLuogo();
		Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
		Message message = Message.creator(new PhoneNumber("whatsapp:+39"+numeroTelefonico), 
				new PhoneNumber("whatsapp:+14155238886"),
				"Gentile Cliente "+turista+
				", la prenotazione per l'attività "+attivita+
				" da lei effettuata è andata a buon fine. La aspettiamo il giorno "+data+" ore "+ora+
				" a "+luogo+" per svolgere l'attività. Buona giornata e grazie per averci scelto!"
				).create();
	}
	
public void sendMessageDelete(Prenotazione prenotazione) {
		
		String numeroTelefonico = prenotazione.getTuristaPrenotante().getRecapitoTelefonico();
		String turista = prenotazione.getTuristaPrenotante().getNome();
		String attivita = prenotazione.getAttivitaPrenotata().getNome();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
		DateTimeFormatter formatterOra = DateTimeFormatter.ofPattern("HH:mm");
		String data = prenotazione.getDataSvolgimentoAttivita().format(formatter);
		String ora = prenotazione.getDataSvolgimentoAttivita().format(formatterOra);
		Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
		Message message = Message.creator(new PhoneNumber("whatsapp:+39"+numeroTelefonico), 
				new PhoneNumber("whatsapp:+14155238886"),
				"Gentile Cliente "+turista+
				", la prenotazione per l'attività "+attivita+
				" da lei effettuata prevista per il giorno "+data+" alle ore "+ora+
				" è stata CANCELLATA. Buona giornata e grazie per averci scelto!"
				).create();
	}
}
