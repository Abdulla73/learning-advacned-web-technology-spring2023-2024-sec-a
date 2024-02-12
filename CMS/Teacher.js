"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(id, name) {
        this.id = id;
        this.name = name;
        this.assigned_course = [];
    }
    Teacher.prototype.addCourse = function (courseName) {
        this.assigned_course.push(courseName);
    };
    Teacher.prototype.displayCourses = function () {
        console.log("".concat(this.name, " assigned courses: ").concat(this.assigned_course));
    };
    Teacher.prototype.toString = function () {
        return "Teacher's ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Teacher;
}());
exports.Teacher = Teacher;
