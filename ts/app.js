// Definisco le interfacce
// Implemento le classi
var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, id) {
        this.tipo = tipo;
        this.id = id;
        this.stato = 'disponibile';
    }
    Mezzo.prototype.assegnaUtente = function (utente) {
        if (this.stato === 'disponibile') {
            this.stato = 'in uso';
            console.log("Il mezzo ".concat(this.id, " (").concat(this.tipo, ") \u00E8 ora assegnato a ").concat(utente.nome, " ").concat(utente.cognome, "."));
        }
        else {
            console.log("Il mezzo ".concat(this.id, " (").concat(this.tipo, ") \u00E8 gi\u00E0 in uso."));
        }
    };
    return Mezzo;
}());
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    Utente.prototype.prenotaMezzo = function (mezzo) {
        if (mezzo.stato === 'disponibile') {
            mezzo.assegnaUtente(this);
        }
        else {
            console.log("Il mezzo ".concat(mezzo.id, " (").concat(mezzo.tipo, ") non \u00E8 disponibile."));
        }
    };
    return Utente;
}());
var Citta = /** @class */ (function () {
    function Citta(citta) {
        this.citta = citta;
        this.mezziDisponibili = [];
    }
    Citta.prototype.aggiungiMezzo = function (mezzo) {
        this.mezziDisponibili.push(mezzo);
        console.log("Il mezzo ".concat(mezzo.id, " (").concat(mezzo.tipo, ") \u00E8 stato aggiunto a ").concat(this.citta, "."));
    };
    return Citta;
}());
// Prova Prova
// Creo oggetti Mezzo per rappresentare bici, scooter e monopattini elettrici
var bici1 = new Mezzo('bici', 'B01');
var bici2 = new Mezzo('bici', 'B02');
var scooter1 = new Mezzo('scooter', 'S01');
var monopattino1 = new Mezzo('monopattino', 'M01');
var monopattino2 = new Mezzo('monopattino', 'M02');
// Aggiungo utenti del servizio
var utente1 = new Utente('Antonio', 'Frassica', 'anto.frass@example.com', 'carta di credito');
var utente2 = new Utente('Simona', 'Giugliano', 'simo.giu@example.com', 'paypal');
// Creo un'istanza della classe Citta per una o più città in cui Moove opera
var citta1 = new Citta('Napoli');
var citta2 = new Citta('Roma');
// Aggiungo mezzi disponibili in città
citta1.aggiungiMezzo(bici1);
citta1.aggiungiMezzo(scooter1);
citta1.aggiungiMezzo(monopattino1);
citta2.aggiungiMezzo(bici2);
citta2.aggiungiMezzo(monopattino2);
// Gli utenti prenotano i mezzi
utente1.prenotaMezzo(bici1);
utente2.prenotaMezzo(scooter1);
utente1.prenotaMezzo(monopattino1);
// Aggiungo nuovi mezzi
var scooter2 = new Mezzo('scooter', 'S02');
citta1.aggiungiMezzo(scooter2);
utente2.prenotaMezzo(scooter2);
console.log(utente1, citta1);
console.log(utente2, citta2);
