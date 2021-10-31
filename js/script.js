"use strict";


let numberOfFilms = prompt("How much films do u see?");
console.log (numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

personalMovieDB.movies = prompt();