'use strict';

const array = [
    1, 2, 'four', '1string',
];
console.log(array);

array.unshift(0); // добавление элемента в начало массива
array.push('five'); // добавление элемента в конец массива
console.log(array);
console.log(array.length);

let last = array.pop(); // извлечение последнего элемента массива
console.log(`last = ${last}`);
console.log(array);

let first = array.shift(); // извлечение первого элемента массива
console.log(`first = ${first}`);
console.log(array);

// shift и unshift являются дорогими операциями вследствие необходимости переиндексации массива


console.log(array.length);


// итерирование массивов
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for(let i of array) {
    console.log(i);
}


// forEach
array.forEach(function (item) {
    console.log(`item = ${item}`);
});
array.forEach(function (item, index) {
    console.log(`array[${index}] = ${item}`);
});
array.forEach(function (value, index, array) {
    console.log(`in array{${array}} element [${index}] = ${value}`);
});


// для метода map справедливы те-же аргументы, что и для forEach
let array2 = array.map(function (value, index) {
    return value + 1;
});
console.log(array2);


// filter
let array3 = array.filter(function (value) {
    return value > 0;
})
console.log(array3);


// split
const string1 = 'lkj, ghgh, lkjfs, ososidf, k, sl dk, lkjls, ar, bebe';
const splitted = string1.split(', ');
console.log(splitted);
console.log(splitted.length);


// join
const string2 = array.join('; ');
console.log(string2);


// sort
console.log(splitted.sort());

const mess = 'введите через запятую и пробел элементы, которые необходимо отсортировать';
// document.getElementById('message').innerHTML = (prompt(mess)).split(', ').sort().join(', ');

// sort с пользовательской функцией
function compareInt(a, b) {
    return a - b;
}

const arrayInt = [1, 98, 23, 2, 9, 223, 4];
console.log(arrayInt.sort(compareInt));


