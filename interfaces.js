"use strict";
var Us = /** @class */ (function () {
    function Us() {
        this.name = 'user';
        this.age = 11;
    }
    Us.prototype.logInfo = function (info) {
        console.log(info);
    };
    Us.prototype.getYear = function () {
        return this.age;
    };
    return Us;
}());
var us = new Us;
console.log(us);
//# sourceMappingURL=interfaces.js.map