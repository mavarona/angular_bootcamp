var miFunction = function (a) {
    return a;
};
var miFunctionF = function (a) { return a; };
console.log(miFunction('uno'));
console.log(miFunctionF('arrow one'));
var miFunctionSum = function (a, b) {
    return a + b;
};
var miFunctionSumF = function (a, b) { return a + b; };
console.log(miFunctionSum(7, 9));
console.log(miFunctionSum(11, 67));
var miFunctionMesUpper = function (message) {
    var result = message.toUpperCase();
    return result;
};
var miFunctionMesUpperF = function (message) {
    var result = message.toUpperCase();
    return result;
};
console.log(miFunctionMesUpper('uno'));
console.log(miFunctionMesUpperF('arrow one'));
// Differ
var name = 'Troll';
var user = {
    name: 'lucas',
    greet: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    }
};
var userF = {
    name: 'lucas',
    greet: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.name);
        }, 1000);
    }
};
user.greet();
userF.greet();
