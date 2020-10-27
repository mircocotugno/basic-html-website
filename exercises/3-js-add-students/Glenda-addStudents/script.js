function addNewStudent() {
  var inputs = document.getElementsByTagName("input")
  /*creo una variabile input che contenga gli elementi di input che prelevo dall'altro file. Risulterà essere un array composto da tanti elementi quanti sono i miei input nel file */
  var student = {
      name: inputs.name.value, 
      surname: inputs.surname.value,
      age: inputs.age.value
  }
  /*creo un oggetto student caratterizzato da 3 chiavi a cui associo a ciascuna un valore corrispondente ai vari indici dell'array input*/
    console.log(student);
    /*nella console voglio che mi stampi il valore che assume la variabile student in modo da verificare che il codice compili correttamente*/
  var form = document.getElementById("newStudentForm");
  /*creo una variabile form che prenda gli elementi tramite l'id newStudentForm presente nel file html*/
  /*se aggiungessi una stampa sulla console vedrei che però ora la pagina si riaggiorna subito (comportamento di default della form). Ho quindi bisogno di stabilizzarla*/
    form.addEventListener("click", function (event) {
    /*gli dico di rimanere in allerta per quando sente cliccare */
    event.preventDefault();
    /*gli dico di non comportarsi come fa normalmente e quindi che non deve riaggiornare subito la pagina */
  });
  
}
