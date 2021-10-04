'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {}, 
    genres: [],
    private: false, 
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Проосмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10){
            alert('Вы классный зритель');
        } else if (personalMovieDB.count >= 30){
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    }, 
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                this.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр под номером ${i + 1} - это ${element}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private == false) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    }
};