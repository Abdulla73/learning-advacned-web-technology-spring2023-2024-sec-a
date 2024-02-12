import {Teacher} from './Teacher';
import {Student} from './Student';

class Course {
  course_id: number;
  course_name: string;
  teacher: Teacher;
  students: Student[];

  constructor(courseId: number, courseName: string, teacher: Teacher) {
    this.course_id = courseId;
    this.course_name = courseName;
    this.teacher = teacher;
    this.students = [];
  }

  new_student(student: Student): void {
    this.students.push(student);
  }

  display_students(): void {
    const studentNames = this.students.map(student => student.name);
    console.log(`${this.course_name} has ${studentNames} student `);
  }
}

export {Course};