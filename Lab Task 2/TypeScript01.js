var a = 10;
var b = "Hello";
var c = true;
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
var p = { id: 1, name: "jhon" };
console.log(p);
var y;
y = 10;
console.log(y);
var z;
z = "red";
console.log(z);
var data;
data = "something";
console.log(data);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var color = Color.red;
console.log(color);
var employee;
employee = [1, "jhon"];
console.log(employee);
var numbers = [1, 2, 3, 4, 5];
var firstelement = numbers[0];
console.log(firstelement);
var arraylength = numbers.length;
numbers.push(6);
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
var daoublenumbers = numbers.map(function (num) { return num * 2; });
console.log(daoublenumbers);
var evennumber = numbers.filter(function (num) { return num % 2 == 0; });
console.log(evennumber);
var sum = numbers.reduce(function (prev, next) { return prev + next; });
console.log(sum);
function addnumbers(a, b) {
    return a + b;
}
console.log(addnumbers(10, 29));
var addnumbers2 = function (a, b) { return a + b; };
console.log(addnumbers2(10, 29));
function addnumbers3(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0);
}
function addnumbers4(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
function addnumbers5() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var num = nums_1[_a];
        sum += num;
    }
    return sum;
}
function addnumbers6(a, b) {
    return a + b;
}
console.log(addnumbers6(10, 20));
var employe = /** @class */ (function () {
    function employe(id, name) {
        this.id = id;
        this.name = name;
    }
    employe.prototype.display = function () {
        console.log("id=".concat(this.id, ",name=").concat(this.name));
    };
    return employe;
}());
var emp1 = new employe(1, "Alvi");
emp1.display();
