// Definisco le interfacce

interface IMezzo {
  tipo: string; // 'bici', 'scooter', 'monopattino'
  id: string;
  stato: 'disponibile' | 'in uso';
  assegnaUtente(utente: IUtente): void;
}

interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;
  prenotaMezzo(mezzo: IMezzo): void;
}

interface ICitta {
  citta: string;
  mezziDisponibili: IMezzo[];
  aggiungiMezzo(mezzo: IMezzo): void;
}

// Implemento le classi

class Mezzo implements IMezzo {
  tipo: string;
  id: string;
  stato: 'disponibile' | 'in uso';

  constructor(tipo: string, id: string) {
      this.tipo = tipo;
      this.id = id;
      this.stato = 'disponibile';
  }

  assegnaUtente(utente: IUtente): void {
      if (this.stato === 'disponibile') {
          this.stato = 'in uso';
          console.log(`Il mezzo ${this.id} (${this.tipo}) è ora assegnato a ${utente.nome} ${utente.cognome}.`);
      } else {
          console.log(`Il mezzo ${this.id} (${this.tipo}) è già in uso.`);
      }
  }
}

class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;

  constructor(nome: string, cognome: string, email: string, metodoPagamento: string) {
      this.nome = nome;
      this.cognome = cognome;
      this.email = email;
      this.metodoPagamento = metodoPagamento;
  }

  prenotaMezzo(mezzo: IMezzo): void {
      if (mezzo.stato === 'disponibile') {
          mezzo.assegnaUtente(this);
      } else {
          console.log(`Il mezzo ${mezzo.id} (${mezzo.tipo}) non è disponibile.`);
      }
  }
}

class Citta implements ICitta {
  citta: string;
  mezziDisponibili: IMezzo[];

  constructor(citta: string) {
      this.citta = citta;
      this.mezziDisponibili = [];
  }

  aggiungiMezzo(mezzo: IMezzo): void {
      this.mezziDisponibili.push(mezzo);
      console.log(`Il mezzo ${mezzo.id} (${mezzo.tipo}) è stato aggiunto a ${this.citta}.`);
  }
}

// Prova Prova

// Creo oggetti Mezzo per rappresentare bici, scooter e monopattini elettrici
const bici1 = new Mezzo('bici', 'B01');
const bici2 = new Mezzo('bici', 'B02');
const scooter1 = new Mezzo('scooter', 'S01');
const monopattino1 = new Mezzo('monopattino', 'M01');
const monopattino2 = new Mezzo('monopattino', 'M02');

// Aggiungo utenti del servizio
const utente1 = new Utente('Antonio', 'Frassica', 'anto.frass@example.com', 'carta di credito');
const utente2 = new Utente('Simona', 'Giugliano', 'simo.giu@example.com', 'paypal');

// Creo un'istanza della classe Citta per una o più città in cui Moove opera
const citta1 = new Citta('Napoli');
const citta2 = new Citta('Roma');

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
const scooter2 = new Mezzo('scooter', 'S02');
citta1.aggiungiMezzo(scooter2);
utente2.prenotaMezzo(scooter2);

console.log(utente1 , citta1);
console.log(utente2 , citta2);