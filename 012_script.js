/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// 1
let numberOfFilms = prompt('Сколько фильмов Вы посмотрели за последний месяц?', '0');

// 2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

// 3
let movie = [];
let rating = [];

for(let i = 0; i < 2; i++) {
    movie.push(prompt('Один из последних просмотренных фильмов?', ''));
    rating.push(prompt('На сколько оцените его?', ''));
}

personalMovieDB.movies[movie.pop()] = rating.pop();
personalMovieDB.movies[movie.pop()] = rating.pop();

console.log(personalMovieDB);
