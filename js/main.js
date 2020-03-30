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
            alert('Benvenuto nel nostro umile sito!');
            // mostra gioco dadi
            giocoDadi.className = 'mostra';
        } else {
            alert('Sparisci immediatamente!');
        }
    }
);

/**
 * Gioco dei dadi uomo vs cpu
 */

