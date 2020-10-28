function addBand() {
    var form = document.getElementById("bookingForm");
<<<<<<< Updated upstream
    /* console.log(form); */
    form.addEventListener("click", function (event) {
        event.preventDefault();
      }); //FINO A QUI TUTTO OK

   var inputs = document.getElementsByTagName("input");
  /* console.log(inputs); //esce un HTML collections [] */
  /* debugger; */ // tutto ok
  
   var band = {
       name: inputs.name.value,
       members: inputs.members.value,
       email: inputs.email.value,
   }
   console.log(band); //tutto ok 
=======
    /* console.log(form); */ //FINO A QUI TUTTO OK

    var inputs = document.getElementsByTagName("inputs");
    /* console.log(inputs); */ //esce un HTML collections [] quindi ok, credo

    form.addEventListener("click", function (event) {
        event.preventDefault();
      }); //anche questa OK
    
    var band = {
      name: inputs.name.value,
      members: inputs.members.value,
      email: inputs.email.value,
      };
    console.log(band); // qui mi dà SYNTAX ERROR
>>>>>>> Stashed changes
}