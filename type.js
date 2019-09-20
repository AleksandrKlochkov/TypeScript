"use strict";
//*****TypeScript TYPES - типы TypeScript
//**STRING
var str = 'string';
//**NUMBER
var num = 10;
//**BOOLEAN
var isBool = true;
//**OTHER, type | type | type
var unknown = '1';
unknown = 1;
unknown = true;
//**ANY, любой тип
var isAny = '1';
unknown = 1;
unknown = true;
//*****ARRAY TYPES - типы массивов
var numArray = [1, 2, 3];
var numArray2 = [1, 2, 3];
var strArray = ['1', '2', '3'];
var strArray2 = ['1', '2', '3'];
var boolArray = [true, false];
var boolArray2 = [true, false];
//**TUPLES - тип для массивов внутри которых элементы с разными типами данных
var array = [true, 2, '3'];
var array2 = [true, 'str', 22];
//*GENERIC - отслеживает переменные которые приходят c различными типаи данных
function genericGetter(data) {
    return data;
}
console.log(genericGetter('string'));
console.log(genericGetter(100));
//**FUNCTION TYPE
var myName = 'name';
var myAge = 50;
function getMyName() {
    return myName;
}
//*OBJECT TYPE
var obj = {
    name: 'name',
    age: 10,
    jobs: ['a', 'b', 1],
    logName: function () {
        console.log(this.name);
    }
};
var obj2 = {
    name: 'name',
    age: '10',
    jobs: ['a', 'b'],
    logName: function () {
        console.log(this.name);
    }
};
//# sourceMappingURL=type.js.map