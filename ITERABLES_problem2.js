// Create an array of objects containing movie details.
// Each movie object should contain:

// Movie Name
// Language
// Rating

// Display all movie details on the webpage using JavaScript

let movies = [
    {
        movieName: "Four Soldiers",
        language: "English",
        rating: "4.5"
    },
    {
        movieName: "Tomorrowland",
        language: "English",
        rating: "4.2"
    },
    {
        movieName: "Hunger Games",
        language: "English",
        rating: "4.8"
    }
];

// First Movie
document.getElementById("mName0").innerHTML = movies[0].movieName;
document.getElementById("lang0").innerHTML = movies[0].language;
document.getElementById("rating0").innerHTML = movies[0].rating;

// Second Movie
document.getElementById("mName1").innerHTML = movies[1].movieName;
document.getElementById("lang1").innerHTML = movies[1].language;
document.getElementById("rating1").innerHTML = movies[1].rating;

// Third Movie
document.getElementById("mName2").innerHTML = movies[2].movieName;
document.getElementById("lang2").innerHTML = movies[2].language;
document.getElementById("rating2").innerHTML = movies[2].rating;