"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course(courseId, courseName, teacher) {
        this.course_id = courseId;
        this.course_name = courseName;
        this.teacher = teacher;
        this.students = [];
    }
    Course.prototype.new_student = function (student) {
        this.students.push(student);
    };
    Course.prototype.display_students = function () {
        var studentNames = this.students.map(function (student) { return student.name; });
        console.log("".concat(this.course_name, " has ").concat(studentNames, " student "));
    };
    return Course;
}());
exports.Course = Course;
