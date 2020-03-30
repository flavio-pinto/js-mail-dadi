/**
 * Chiedi all’utente la sua email
 * controlla che sia nella lista di chi può accedere
 * stampa un messaggio appropriato
 */

// Ricerca email nell'array
var listaEmail = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers', 'flavio@boolean.careers'];
var pulsanteEntra = document.getElementById('pulsanteEntra');
var giocoDadi = document.getElementById('gioco-dadi');

pulsanteEntra.addEventListener('click',
    function() {
        var tuaEmail = document.getElementById('tuaEmail').value;
        var emailTrovata = false;

        // ricerca
        for (var i = 0; i < listaEmail.length; i++) {
            var email = listaEmail[i];
            
            if (tuaEmail == email) {
                emailTrovata = true;
            }
        }

        // risposta
        if (emailTrovata === true) {
            alert('Benvenuto nel nostro sito!');
            // mostra gioco dadi
            giocoDadi.className = 'mostra';
        } else {
            alert('Sparisci immediatamente!');
        }
    }
);

/**
 * Gioco dei dadi player vs cpu
 */

// stabilisco variabili
var tuaGiocata;
var giocataCpu;

lanciaDadi.addEventListener('click',
    function() {
        // Lancia dadi e ottieni numero da 2 a 12...
        tuaGiocata = Math.floor(Math.random() * (12 - 1)) + 2;

        // anche la CPU
        giocataCpu = Math.floor(Math.random() * (12 - 1)) + 2;

        // stampa punteggio nella tabella
        document.getElementById('tuoPunteggio').innerHTML = tuaGiocata;
        document.getElementById('punteggioCpu').innerHTML = giocataCpu;

        // risultato
        if (tuaGiocata > giocataCpu) {
            document.getElementById('risultato').innerHTML = 'Complimenti, hai vinto!';
            tuoPunteggio.className = 'bkg-green';
            punteggioCpu.className = 'bkg-red';
        } else if (tuaGiocata < giocataCpu) {
            document.getElementById('risultato').innerHTML = 'Che disdetta, hai perso!';
            tuoPunteggio.className = 'bkg-red';
            punteggioCpu.className = 'bkg-green';
        } else {
            document.getElementById('risultato').innerHTML = 'Pareggio!';
            tuoPunteggio.className = 'bkg-yellow';
            punteggioCpu.className = 'bkg-yellow';
        }
    }
);