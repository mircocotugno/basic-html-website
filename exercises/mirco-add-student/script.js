var students = [
  {
    name: "Alessandra",
    surname: "Pizzol",
    age: 21,
  },
];

function addNewStudent() {
  var inputs = document.getElementsByTagName("input");
  var form = document.getElementById("newStudentForm");
  var student = {
    name: inputs.name.value,
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
  studentItem.appendChild(
    document.createTextNode(student.name + " " + student.surname + " - " + student.age)
  );
  list.appendChild(studentItem);
}