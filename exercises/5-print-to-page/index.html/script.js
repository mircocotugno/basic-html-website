var books = [
  {
    title: "Ernesto e Groviglio",
    description:
      "Groviglio è un gattino nero che ama giocare coi gomitoli. Da qualche tempo il suo amato padrone, l’anziano signor Ernesto, non torna più a casa. Groviglio lo aspetta con pazienza e fiducia, finché un giorno, stanco di aspettare, decide di andarlo a cercare…",
    author: "Schiavo Maddalena",
    year: "2020",
    editor: "Clichy",
  },
  {
    title: "Bulli da favola",
    description:
      "Un libro per aiutare i bambini a fronteggiare un fenomeno sempre più diffuso: il bullismo. Dodici famosissimi cattivi delle fiabe, che rappresentano simbolicamente situazioni in cui i ragazzi possono riconoscersi, per aiutarli a comprendere che spesso proprio chi appare più debole si rivela essere l'eroe della favola, e soprattutto che i bulli non sono mai invincibili come sembrano.",
    author: "Fornasari, Eleonora",
    year: "2020",
    editor: "WS Kid",
  },
  {
    title: "Natura strabiliante",
    description:
      "Scopri le sorprendenti forme di vita che popolano il nostro pianeta. Dall’albero del drago di Socotra, la cui resina rossa ha l’aspetto del sangue, all’affascinante caravella portoghese, una creatura simile alla medusa dai velenosissimi tentacoli lunghi più di dieci metri…",
    author: "Hoare Ben",
    year: "2020",
    editor: "Gribaudo",
  },
  {
    title: "Il libro della giungla",
    description:
      "La spettacolare giungla del grande classico di Rudyard Kipling prende letteralmente vita nelle pagine di questo albo appositamente adattato da Annamaria Soldera (La vera storia dei 25 Babbi Natale e Le scarpe della Befana) per il pubblico dei più piccoli e magistralmente illustrato da Filippo Barbacini (Le avventure di Pinocchio e Il gatto con gli stivali) in un tripudio di animali, colori e dettagli.",
    author: "Soldera Annamaria",
    year: "2020",
    editor: "Nomos bambini",
  },
  {
    title: "Le avventure di Tom Sawyer",
    description:
      "Tom è un vero combinaguai, e sua zia Polly non sa più come tenerlo a bada. Quando poi si accompagna al suo amico Huck le cose prendono velocemente una brutta piega. E a complicare il tutto ci si mette anche Joe l'Indiano con le sue storie di tesori e cadaveri disseppelliti...",
    author: "Pace Simone",
    year: "2020",
    editor: "Il Battello a vaporE",
  },
  {
    title: "La storia perduta",
    description:
      "Groviglio è un gattino nero che ama giocare coi gomitoli. Da qualche tempo il suo amato padrone, l’anziano signor Ernesto, non torna più a casa. Groviglio lo aspetta con pazienza e fiducia, finché un giorno, stanco di aspettare, decide di andarlo a cercare…",
    author: "Gnone Elisabetta",
    year: "2020",
    editor: "Salani editore",
  },
  {
    title: "Il tuo mondo al microscopio",
    description:
      " Il volume illustra come usare un microscopio e guida i bambini nell’osservazione, presentando la storia della microscopia e tante attività con materiali diversi, ponendo domande che stimolano la curiosità e fornendo spiegazioni. Costruire il microscopio ed esplorare il mondo attorno a sé affascinerà i bambini, che seguendo le istruzioni dettagliate potranno osservare quanto li circonda da una nuova prospettiva.",
    author: "Jackson Tom",
    year: "2020",
    editor: "Editoriale scienza",
  },
];

// inizia il tuo lavoro

//creo il ciclo for che scorre il mio array di oggetti e per ogni oggetto richiamo la funzione di aggiunta del libro
window.onload = function() {
  for (let i=0; i<books.length; i++) {
    addBook(books[i]);
  };
};

//creo la funzione di agigunta del libro
function addBook(x){
  //creo la scatola più esterna e associo la classe
  var box = document.createElement("div");
  box.classList.add("list-element");
  //creo il titolo, che corrisponde all'elemento title dell'oggetto
  var name = document.createTextNode(x.title);
  box.appendChild(name);
  console.log(name);
  //creo il paragrafo, inserisco la descrizione nel paragrafo e inserisco il tutto nel div
  var summary = document.createElement("p");
  summary.appendChild(document.createTextNode(x.description));
  box.appendChild(summary);
  console.log(summary)
  //creo la lista che conterrà le 3 voci di autore, anno ed editore, aggiungo la lista nel div
  var list = document.createElement("ul");
  list.appendChild(document.createTextNode("Autore: " + x.author));
  list.appendChild(document.createTextNode("Anno pubblicazione: " + x.year));
  list.appendChild(document.createTextNode("Editore: " + x.editor));
  box.appendChild(list);
  console.log(list);
};