function addNewStudent() {
  console.log("Aggiungi Studente");
  /* fino a qui funziona ma la pagina si ricarica subito quando clicco sul pulsante*/
  var form = document.getElementById("newStudentForm");
  /*con var form gli dico di non comportarsi come di default in modo che non refreshi */
  /*ho riempito la variabile form con l'id della form che ho in html */
  form.addEventListener("click", function (event) {
    event.preventDefault();
  });
  /*gli dico di rimanere in allerta per quando sente cliccare */
}
/* abbiamo personalizzato il comportamento di default di una form. Ora quando apro in browser 
e clicco sul punsante sulla console mi stampa la scritta Aggiungi Studente senza che si cancelli subito dopo.
La stampa della scritta mi serve solo per verificare che il ciclo della funzione giri correttamente */