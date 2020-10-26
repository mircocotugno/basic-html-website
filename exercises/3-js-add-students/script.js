var students = [
  {
    name: "mirco",
    surname: "cotugno",
    age: 34,
  }
];

window.onload = function () {
  for (let student of students) {
    addStudentToList(student);
  }
};

function addStudent() {
  var form = document.getElementById("newStudentForm");
  var inputs = document.getElementsByTagName("input");
  var student = {
    name: inputs.name.value,
    surname: inputs.surname.value,
    age: inputs.age.value,
  };
  var { name, surname, age } = student;
  if (name && surname && age) { 
    // aggiungo lo studente all'array students
    students.push(student);
    // richiamo la funzione per inserire lo studente nella lista
    addStudentToList(student);
    // svuotare i campi input
    form.reset();
    // rimovo la class se la funzione va a buon fine
    if(form.className === "has-error") {form.classList.remove("has-error")};
  } else {
    console.log("ERR");
    // aggiungo un classe alla form per segnalare un errore
    form.classList.add("has-error");
  }
  // per non far ricaricare la pagina
  form.addEventListener("click", function (event) {
    event.preventDefault();
  });
  console.log(students);
}

function addStudentToList(student) {
  var list = document.getElementById("studentList");
  var studentItem = document.createElement("li");
  studentItem.appendChild(
    document.createTextNode(
      student.name + " " + student.surname + " - " + student.age
    )
  );
  list.appendChild(studentItem);
}
