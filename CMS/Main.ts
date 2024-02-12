import { Student } from './Student';
import { Teacher } from './Teacher';
import { Course } from './Course';

const teacher1 = new Teacher(1087, 'Mr. Abu Sufian');
const teacher2 = new Teacher(3892, 'Mrs. Sultana Begum');

const student1 = new Student(1519, 'Abdus Salam');
const student2 = new Student(2345, 'Julfikar Ali');

const course1 = new Course(1, 'Bangla', teacher1);
const course2 = new Course(2, 'English', teacher2);

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
