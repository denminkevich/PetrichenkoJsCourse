const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    private: false
};

const lastMovie = prompt('Какой последний фильм вы смотрели?', '');
const mark = prompt('Ваша оценка этому фильму?', '');
const lastMovie2 = prompt('Какой последний фильм вы смотрели?', '');
const mark2 = prompt('Ваша оценка этому фильму?', '');

personalMovieDB.movies[lastMovie] = mark;
personalMovieDB.movies[lastMovie2] = mark2;

console.log(personalMovieDB);