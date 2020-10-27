function addNewStudent() {
  var inputs = document.getElementsByTagName("input");
  var student = {
    name: inputs.name.value,
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
