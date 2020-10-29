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
window.onload = function() {
  for (let book of books) {
    console.log(book);
    addNewBook(book);
  }
};
//creo funzione che mi permetta di aggiungere un libro e stamparlo nella lista
//all'interno della funzione struttuto in JS i div, l'ul e i li dell'HTML
function addNewBook(book) {
  var newBook = document.createElement("div");
  newBook.classList.add("list-element");

  var bookTitle = document.createElement("h4"); //creo titolo
  bookTitle.appendChild(document.createTextNode(books.title)); //lo stampo
  newBook.appendChild(bookTitle); //do a div new book figlio bookTitle

  var bookDescription = document.createElement("p");
  bookDescription.appendChild(document.createTextNode(books.description));
  newBook.appendChild(bookDescription);
  debugger;

  var bookInfo = document.createElement("ul");
  newBook.appendChild(bookDescription);

  var bookAuthor = document.createElement("li");
  bookAuthor.appendChild(createTextNode(books.author));
  bookInfo.appendChild(bookAuthor);

  var bookYear = document.createElement("li");
  bookYear.appendChild(createTextNode(books.year));
  bookInfo.appendChild(bookYear);

  var bookEditor = document.createElement("li");
  bookEditor.appendChild(createTextNode(books.editor));
  bookInfo.appendChild(bookEditor);

  console.log(newBook);
  var bookList = document.getElementById("bookList");
  bookList.appendChild(newBook);
}
