// Creazione struttura dati preventivi (array di oggetti)
var quoteData = {
  client: null,
  license: null,
  number: null,
  date: null,
  price: null,
  endLicense: null,
};
var quotes = [
  {
    client: "Pippo srl",
    license: "Azienda",
    number: 5,
    date: 29 / 10 / 2020,
    price: 999.99,
    endLicense: 28 / 10 / 2021,
  },
  {
    client: "Pippo srl",
    license: "Azienda",
    number: 5,
    date: 29 / 10 / 2020,
    price: 999.99,
    endLicense: 28 / 10 / 2021,
  },
  {
    client: "Pippo srl",
    license: "Azienda",
    number: 5,
    date: 29 / 10 / 2020,
    price: 999.99,
    endLicense: 28 / 10 / 2021,
  },
];

// Al caricamento della pagina stampo i preventivi esistenti
window.onload = function () {
  for (let quote of quotes) {
    console.log(quote);
    addQuote(quote);
  }
};
// Estraggo le informazioni dalla form

// Verifico la correttezza dei campi

// Compongo i dati del preventivo

// Eseguo i calcoli per ottenerere il prezzo totale

// Da capire anteprima costo preventivo

// Inserico il nuovo preventivo nella lista (array)

// stampo il nuovo elemento nella lista
function addQuote(quote) {
  //definisco gli elementi principali
  var newQuote = document.createElement("div");
  var quoteContainer = document.createElement("p");

  // Creo l'elemento che rappresenta il primo span con la data e lo metto dentro al paragrafo
  var dateD = document.createElement("span");
  dateD.appendChild(document.createTextNode(quote.date));
  quoteContainer.appendChild(dateD);

  // Creo l'elemento che rappresenta il secondo span con il nome cliente e lo metto dentro al paragrafo
  var clientD = document.createElement("span");
  clientD.appendChild(document.createTextNode(quote.client));
  quoteContainer.appendChild(clientD);

  // Creo l'elemento che rappresenta il terzo span con la licenza e lo metto dentro al paragrafo
  var licenseD = document.createElement("span");
  licenseD.appendChild(document.createTextNode(quote.license));
  quoteContainer.appendChild(licenseD);

  // Creo l'elemento che rappresenta il quarto span con il numero e lo metto dentro al paragrafo
  var numberD = document.createElement("span");
  numberD.appendChild(document.createTextNode(quote.number));
  quoteContainer.appendChild(numberD);

  // Creo l'elemento che rappresenta il quinto span con il prezzo e lo metto dentro al paragrafo
  var priceD = document.createElement("span");
  priceD.appendChild(document.createTextNode(quote.price));
  quoteContainer.appendChild(priceD);

  newQuote.classList.add("quote");
  newQuote.appendChild(quoteContainer);

  console.log(newQuote);
  var quoteList = document.getElementById("quoteList");
  quoteList.appendChild(newQuote);
}
// Creo l'elemento della lista
