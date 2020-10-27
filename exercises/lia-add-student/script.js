/* function addNewStudent() {             //qui inizia la dichiarazione della funzione //richiamo la funz addnewecc qnd clicco bottone
    console.log("aggiungi studente");    //con form la pagina si refresha dopo aver eseuito la funz
    var form = document.getElementById("newStudentForm");
    console.log(form);
                                        //riempie la variabile form con elem che ha quell'id
                                       // isolo elemento form con selettore js che seleziona elem di un certo id //mi serve per dirgli di non comportarsi come di default (non refreshare)
                                      // richiamo sistemi del dom document è uno di quelli
    form.addEventListener("click", function (event){
        event.preventDefault();
    }) */

function addNewStudent() {
    var inputs = document.getElementsByTagName("input");
    var student = { //oggetto in cui posso instanziare diverse chiavi/valori
     name: inputs.name.value, //name: è la chiave, a fianco c'è il valore
     surname: inputs.surname.value, 
     age: inputs.age.value,
    }
    console.log(student);
    
    var idForm = "newStudentForm";
    var form = document.getElementById(idForm);
    form.addEventListener("click", function (event) {
    event.preventDefault();
 });
}

 /* debugger;*/