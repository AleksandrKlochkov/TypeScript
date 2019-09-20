"use strict";
var Util;
(function (Util) {
    function isEmpty(data) {
        return !data;
    }
    Util.isEmpty = isEmpty;
    function isUndefined(data) {
        return typeof data === 'undefined';
    }
    Util.isUndefined = isUndefined;
    Util.PI = Math.PI;
    Util.EXP = Math.E;
})(Util || (Util = {}));
console.log(Util.isEmpty(''));
console.log(Util.isEmpty('asd'));
//# sourceMappingURL=namespaces.js.map