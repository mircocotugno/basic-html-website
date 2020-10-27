/*definisco la variabile "film" come array di oggetti perchè so già quali saranno le chiavi che lo compongono*/
var film = [
    {
        movie: "Pane e tulipani",
        year: 2000,
        type: "commedia romantica",
        rating: 4/5
    }
];
/*credo la funzione "addFilm" che richiamo ogni volta che premo il pulsante*/
function addFilm() {
    /*creo le variabili che contengono le info dell'html */
    var form = document.getElementById("viewedMovie");
    var inputs = document.getElementsByTagName("input");
    /*creo la variabile-oggetto con specifica di abbinamento delle chiavi */
    var flm = {
        movie: inputs.movie.value,
        year: inputs.year.value,
        type: inputs.type.value,
        rating: inputs.rating.value
    };

    // per non far ricaricare la pagina
  form.addEventListener("click", function (event) {
    event.preventDefault();
  });
  console.log(film);
}