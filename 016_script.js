"use strict";

// Типы функций

// 1 function declaration
function getFalse() {
    return false;
}
console.log(getFalse());


// 2 function expression
const foo = function () {
    return false;
};
foo();


// 3 arrow functions
let bar;

// Круглые скобки не обязательны для единственного параметра:
bar = a => a * a;
console.log(bar(6));

bar = (a, b) => a + b;
console.log(bar(1, 2));

bar = (a, b) => {
    return a + b;
};
console.log(bar(1, 2));

// Функция без параметров нуждается в круглых скобках:
bar = () => {
    return 42;
};
console.log(bar());

