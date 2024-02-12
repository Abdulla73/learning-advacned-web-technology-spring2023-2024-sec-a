class Teacher {
    id: number;
    name: string;
    assigned_course: string[];
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
      this.assigned_course = [];
    }
  
    addCourse(courseName: string): void {
      this.assigned_course.push(courseName);
    }
  
    displayCourses(): void {
      console.log(`${this.name} assigned courses: ${this.assigned_course}`);
    }
  
    toString(): string {
      return `Teacher's ID: ${this.id}, Name: ${this.name}`;
    }
  }

export {Teacher};