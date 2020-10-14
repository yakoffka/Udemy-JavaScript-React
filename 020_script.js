'use strict';

// const object = new Object();
const object = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red',
    },
};

// вывод свойства объекта:
console.log(object.height);

// удаление свойства объекта:
delete object.height;
console.log(object);

// перебор свойств объекта:
for (let key in object) {
    console.log(`property ${key} = ${object[key]}`);
}

// перебор свойств объекта включая свойства вложенных объектов:
for (let key in object) {
    if (typeof (object[key]) === 'object') {
        for (let sub_key in object[key]) {
            console.log(`property ${sub_key} = ${object[key][sub_key]}`);
        }
    } else {
        console.log(`property ${key} = ${object[key]}`);
    }
}

// вывод ключей объекта
console.log(Object.keys(object));

// вывод количества ключей объекта
console.log(Object.keys(object).length);


// создание и вызов встроенных методов объекта
const foo = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: 'value4',
    customMethod: function () {
        console.log('This is customMethod');
    }
}

foo.customMethod();


// деструктуризация объектов
console.log(object['colors']['border']);
//
const {border, background} = object.colors;
console.log(border);

