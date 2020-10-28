var viewedMovie = document.getElementById("viewedMovie");
var input = document.getElementsByTagName("input");
var movieList = [
    movie = {}
];

window.onload = function () {
    for(var i=0; i<movieList.length; i++){
        addMovie(movie);
    }
};

function addMovie(movie) {
    movie = {
        name: input.name.value,
        year: input.year.value,
        type: input.type.value,
        rating: input.rating.value 
    }; 
    if(name && year && type && rating){
        movieList.push(movie);
        addToList(movie);
        input.reset();
    } else { 
        viewedMovie.classList.add("error");
    }
    viewedMovie.addEventListener("click", function (event) {
        event.preventDefault();
      });
};

function addToList(movie){
    var list = document.getElementById("list");
    var movieItem = document.createElement("li");
        movieItem.appendChild(
            document.createTextNode(movie.name + " (" + movie.year + ", " + movie.type + ") " + movie.rating)
        );
    list.appendChild(movieItem);
};
