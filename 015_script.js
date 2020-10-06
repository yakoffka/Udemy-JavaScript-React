/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать условие еще двумя способами*/

'use strict';

function extracted(question, num = false) {
    let answer = '';
    while (answer == null || answer.length === 0 || answer.length > 50 || (num && isNaN(Number(answer)))) {
        answer = prompt(question, '');
    }
    return answer;
}

const numberOfFilms = Number(extracted('Сколько фильмов Вы посмотрели за последний месяц?', true)),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    },
    names = [],
    ratings = [];

for (let i = 0; i < personalMovieDB.count; i++) {
    names.push(extracted('Один из последних просмотренных фильмов?'));
    ratings.push(extracted('На сколько оцените его?'));
}

while (names.length) {
    personalMovieDB.movies[names.shift()] = ratings.shift();
}

console.log(personalMovieDB);


// 4.1
/*let mess;
if (personalMovieDB.count > 30) {
    mess = 'Вы киноман';
} else if (personalMovieDB.count > 10) {
    mess = 'Вы классический зритель';
} else if (personalMovieDB.count > 0) {
    mess = 'Просмотрено довольно мало фильмов';
} else if (personalMovieDB.count === 0) {
    mess = 'Совсем ничего?';
} else {
    mess = 'Врёте наверное?';
}*/


// 4.2
let mess;

switch (true) {
    case personalMovieDB.count > 30:
        mess = 'Вы киноман';
        break;
    case personalMovieDB.count > 10:
        mess = 'Вы классический зритель';
        break;
    case personalMovieDB.count > 0:
        mess = 'Просмотрено довольно мало фильмов';
        break;
    case personalMovieDB.count === 0:
        mess = 'Совсем ничего?';
        break;
    default:
        mess = 'Вы наркоман';
}

document.getElementById('message').innerHTML = mess;
