'use strict';

function first() {
    // do something
    setTimeout(function() {
        console.log('first');
    }, 1000);
}

function second() {
    console.log('second');
}

// при вызове функций сначала в лог попадет second, а только по истечении 1000 мс - first:
first();
second();

// функции запускаются в той оченёдности, в которой указаны. но получение результата зависит от времени выполнения


// для выполнения функции только после завершения выполнения предыдущей необходимо использовать функцию обратного вызова
function third(number, callback) {
    console.log(number);
    callback();
}

third('third function', function () {
    console.log('forth function');
});


// или так:
function forth() {
    console.log('forth function');
}

third('third function', forth);

