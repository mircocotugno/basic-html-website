var students= [
  {
    name: "Alessandra",
    surname: "Pizzol",
    age: 21
  }
];
/*creo una variabile student che sarà un array contentente diversi oggetti. In questo modo li potrò andare a stampare */
/*parto già con un nome dentro */
function addNewStudent() {
  var inputs = document.getElementsByTagName("input")
  /*creo una variabile input che contenga gli elementi di input che prelevo dall'altro file. Risulterà essere un array composto da tanti elementi quanti sono i miei input nel file */
  var student = {
      name: inputs.name.value, 
      surname: inputs.surname.value,
      age: inputs.age.value
  }
  var form = document.getElementById("newStudentForm");
  /*creo una variabile form che prenda gli elementi tramite l'id newStudentForm presente nel file html*/

    if(student.name && student.surname && student.age) {
    console.log("ok");
    students.push(student); /*mettendolo dentro l'i, loa ggiunge all'array solo quando tutti i campi sono compilati */
    form.classList.remove("has-error");
    addStudentToList(student);
    form.reset(); /*svuota i campi una volta aggiunti */
  } else {
    console.log("err");
    form.classList.add("has-error");
  }
  
  /*aggiungo il valore di student all'arrai students */
  console.log(students);
  /*creo un oggetto student caratterizzato da 3 chiavi a cui associo a ciascuna un valore corrispondente ai vari indici dell'array input*/
   
  /*se aggiungessi una stampa sulla console vedrei che però ora la pagina si riaggiorna subito (comportamento di default della form). Ho quindi bisogno di stabilizzarla*/
    form.addEventListener("click", function (event) {
    /*gli dico di rimanere in allerta per quando sente cliccare */
    event.preventDefault();
    /*gli dico di non comportarsi come fa normalmente e quindi che non deve riaggiornare subito la pagina */
  });
}

function addStudentToList(student) {
  var list= document.getElementById("studentList");
  var studentItem = document.createElement("li");
  studentItem.appendChild(
    document.createTextNode(student.name + " " + student.surname + " - " + student.age)
  );
  list.appendChild(studentItem);
}