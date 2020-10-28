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

var students = [
    {
      name: "Lia",
      surname: "Maccapani",
      age: 21,
    },
    {
      name: "Mirco",
      surname: "Cotugno",
      age: 34,
      },
    {
      name: "Glenda",
      surname: "Rimondi",
      age: 26,
    }
];

window.onload = function () {
    for (let student of students) { //console.log(student)
        addStudentToList(student);
    }
}

function addNewStudent() {
    var inputs = document.getElementsByTagName("input");
    var idForm = "newStudentForm";
    var form = document.getElementById(idForm);
    var student = { //oggetto in cui posso instanziare diverse chiavi/valori
     name: inputs.name.value, //name: è la chiave, a fianco c'è il valore
     surname: inputs.surname.value, 
     age: inputs.age.value,
    };

    if (student.name && student.surname && student.age) {
        console.log("ok");
        students.push(student);
        form.classList.remove("has-error");
        addStudentToList(student);
        form.reset();
    } else {
        console.log("err");
        form.classList.add("has-error");
    }
    console.log(students);

    form.addEventListener("click", function (event) {
        event.preventDefault(); 
 });
}

function addStudentToList(student) {
    var list = document.getElementById("studentList");
    var studentItem = document.createElement("li");
    var removeButton = document.createElement("button");
    removeButton.addEventListener("click", function() { removeStudentFromList(student) });
    removeButton.appendChild(document.createTextNode("X"));

    studentItem.appendChild(removeButton);
    studentItem.appendChild(
        document.createTextNode(student.name + " " + student.surname + " - " + student.age)
    );
   /* studentItem.appendChild(document.createTextNode("X"));
    studentItem.appendChild(removeButton);
    studentItem.appendChild(
            document.createTextNode(student.name + " " + student.surname + " - " + student.age)
        ); */
    list.appendChild(studentItem);
}

function removeStudentFromList(student) {
    console.log(student);
}
 /* debugger;*/