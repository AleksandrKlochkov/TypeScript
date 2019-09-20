"use strict";
function genericGetter(data) {
    return data;
}
// console.log(getter(100))
// console.log(getter('str').length)
var newGenericFunction = genericGetter;
var Multiply = /** @class */ (function () {
    function Multiply(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply.prototype.getResults = function () {
        return +this.a * +this.b;
    };
    return Multiply;
}());
var gNum = new Multiply(10, 5);
var gStr = new Multiply('4', '6');
// console.log('class Multiply type number', gNum.getResults())
// console.log('class Multiply type str', gStr.getResults())
var Multiply2 = /** @class */ (function () {
    function Multiply2(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply2.prototype.getResults = function () {
        return +this.a * +this.b;
    };
    return Multiply2;
}());
var gNum2 = new Multiply(10, 5);
var gStr2 = new Multiply('4', '1');
console.log('class Multiply type number', gNum2.getResults());
console.log('class Multiply type str', gStr2.getResults());
//# sourceMappingURL=generic.js.map