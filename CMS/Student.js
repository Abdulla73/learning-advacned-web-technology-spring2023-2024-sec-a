"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
        this.courses = [];
    }
    Student.prototype.enroll_course = function (cname) {
        this.courses.push(cname);
    };
    Student.prototype.display_courses = function () {
        console.log("".concat(this.name, ":  enrolled in ").concat(this.courses));
    };
    Student.prototype.toString = function () {
        return "Student ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Student;
}());
exports.Student = Student;
