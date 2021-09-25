'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    private: false
};

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

if (personalMovieDB.count < 10) {
    alert('Проосмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10){
    alert('Вы классный зритель');
} else if (personalMovieDB.count >= 30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);