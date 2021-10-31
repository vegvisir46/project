"use strict";


const numberOfFilms = +prompt('How much films do u see?', '');
console.log (numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};  

let q1 = prompt('Фильм:', ''),
    q2 = prompt('Оценка:', ''),
    q3 = prompt('Фильм:', ''),
    q4 = prompt('Оценка:', '');

personalMovieDB.movies [q1] = q2;
personalMovieDB.movies [q3]= q4;

//console.log(personalMovieDB.movies.q1);
//console.log(personalMovieDB.movies.q3);
console.log(personalMovieDB);