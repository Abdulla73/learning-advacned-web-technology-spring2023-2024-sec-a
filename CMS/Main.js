"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
var Course_1 = require("./Course");
var teacher1 = new Teacher_1.Teacher(1087, 'Mr. Abu Sufian');
var teacher2 = new Teacher_1.Teacher(3892, 'Mrs. Sultana Begum');
var student1 = new Student_1.Student(1519, 'Abdus Salam');
var student2 = new Student_1.Student(2345, 'Julfikar Ali');
var course1 = new Course_1.Course(1, 'Bangla', teacher1);
var course2 = new Course_1.Course(2, 'English', teacher2);
course1.new_student(student1);
course1.new_student(student2);
course2.new_student(student1);
course2.new_student(student2);
teacher1.addCourse(course1.course_name);
teacher2.addCourse(course2.course_name);
student1.enroll_course(course1.course_name);
student1.enroll_course(course2.course_name);
student2.enroll_course(course2.course_name);
console.log(student1.toString());
student1.display_courses();
console.log(teacher1.toString());
teacher1.displayCourses();
console.log(teacher2.toString());
teacher2.displayCourses();
course1.display_students();
course2.display_students();
