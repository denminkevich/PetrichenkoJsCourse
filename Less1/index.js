'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastMovie = prompt('Какой последний фильм вы смотрели?', ''),
            mark = prompt('Ваша оценка этому фильму?', '');
        if (lastMovie.length < 50 && lastMovie != '' && lastMovie != null && mark != '' && mark != null) {
            personalMovieDB.movies[lastMovie] = mark;
            console.log('Добавлен фильм');
        } else {
            console.log('Не добавлен!');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Проосмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10){
        alert('Вы классный зритель');
    } else if (personalMovieDB.count >= 30){
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();