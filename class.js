"use strict";
//*****CLASS Класы TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, isTeacher) {
        this.age = 30;
        this.name = name;
        this.isTeacher = isTeacher;
    }
    User.prototype.getChiter = function () {
        return this.isTeacher;
    };
    User.prototype.getAge = function () {
        return this.age + ' ' + this.getChiter().toString();
    };
    return User;
}());
var user = new User('User', true);
// console.log(user.getAge())
var User2 = /** @class */ (function () {
    function User2(name, job) {
        this.name = name;
        this.job = job;
        this.age = 30;
        this.isTeacher = false;
        this.name = name;
    }
    User2.prototype.getAge = function () {
        return this.age.toString();
    };
    return User2;
}());
var WFM = /** @class */ (function (_super) {
    __extends(WFM, _super);
    function WFM(job) {
        var _this = _super.call(this, 'WFM', job) || this;
        _this.name = 'WFM';
        _this.age = 100;
        _this.isTeacher = true;
        return _this;
    }
    WFM.prototype.getAge = function () {
        return 'Hello ' + this.age.toString();
    };
    return WFM;
}(User2));
var user2 = new User2('User', 'developer');
var wfm = new WFM('Frontend');
console.log(wfm.getAge());
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2010;
    }
    Car.prototype.getCarYear = function () {
        return this.year;
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mercedes.prototype.logInfo = function (info) {
        console.log(info);
    };
    return Mercedes;
}(Car));
var mercedes = new Mercedes();
console.log('Mercedecs', mercedes);
//# sourceMappingURL=class.js.map