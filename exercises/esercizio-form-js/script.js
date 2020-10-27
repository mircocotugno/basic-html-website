function addBand() {
    var form = document.getElementById("bookingForm");
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
}