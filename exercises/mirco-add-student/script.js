function addNewStudent() {
  console.log("aggiungi studente");
  
  var idForm = "newStudentForm";
  var form = document.getElementById(idForm);
  form.addEventListener("click", function (event) {
    event.preventDefault();
  });
}
