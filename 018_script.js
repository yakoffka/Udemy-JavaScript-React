/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat.
Если стоит в позиции false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
    "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres

P.S. Функции вызывать не обязательно*/

'use strict';

const numberOfFilms = Number(getValidPrompt('Сколько фильмов Вы посмотрели за последний месяц?', true)),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    },
    names = [],
    ratings = [],
    countGenres = 3;

for (let i = 0; i < personalMovieDB.count; i++) {
    names.push(getValidPrompt('Один из последних просмотренных фильмов?'));
    ratings.push(getValidPrompt('На сколько оцените его?'));
}

while (names.length) {
    personalMovieDB.movies[names.shift()] = ratings.shift();
}

let mess = getMessBy(personalMovieDB.count);
writeYourGenres();

document.getElementById('message').innerHTML = mess;
console.log(personalMovieDB);




/**
 * Получение валидных данных от пользователя
 * @param question
 * @param num
 * @returns {string}
 */
function getValidPrompt(question, num = false) {
    let answer = '';
    while (answer == null || answer.length === 0 || answer.length > 50 || (num && isNaN(Number(answer)))) {
        answer = prompt(question, '');
    }
    return answer;
}

/**
 * Получение сообщения в зависимости от количества просмотренных фильмов
 * @param count
 */
function getMessBy(count) {
    if (count > 30) {
        return 'Вы киноман';
    } else if (count > 10) {
        return 'Вы классический зритель';
    } else if (count > 0) {
        return 'Просмотрено довольно мало фильмов';
    } else if (count === 0) {
        return 'Совсем ничего?';
    } else {
        return 'Вы - наркоман!';
    }
}

/**
 * Вывод в консоль главного объекта программы, если personalMovieDB.privat === false
 */
function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB)
    }
}

/**
 *
 */
function writeYourGenres() {
    for (let i = 1; i <= countGenres; i++) {
        personalMovieDB.genres.push(getValidPrompt(`Ваш любимый жанр #${i}`));
    }
}