'use strict';

const object1 = {
    prop1: 1,
    prop2: 2,
    prop3: 3,
    prop4: {
        p5: 5,
        p6: 6,
    },
};
console.dir(object1);

function customClone(obj) {
    let cloneObj = {};

    let i
    for (i in obj) {
        // поверхностное клонирование
        // cloneObj[i] = obj[i];

        // глубокое(?) клонирование
        if (typeof (obj[i]) === 'object') {
            cloneObj[i] = customClone(obj[i]);
        } else {
            cloneObj[i] = obj[i];
        }
    }
    return cloneObj;
}

const object2 = customClone(object1);
console.log(object2);

object2.prop2 = 11;
object2.prop4.p5 = 12;
console.dir(object1);
console.dir(object2);


// Object.assign тоже поверхностное клонирование
console.log(Object.assign(object1, {a: 1, b: 2,}));

const object3 = Object.assign({}, object1);
object3.prop3 = 'new3';
object3.prop4.p5 = 'new5';
console.dir(object1);
console.dir(object3);

const object4 = Object.clone({}, object1);
console.dir(object1);
console.dir(object4);
