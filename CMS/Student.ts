class Student{
    id:number;
    name:string;
    courses:string[];

    constructor(id:number, name:string){
        this.id=id;
        this.name=name;
        this.courses=[]
    }

    enroll_course(cname:string):void{
        this.courses.push(cname);
    }
    display_courses(): void {
        console.log(`${this.name}:  enrolled in ${this.courses}`);
    }
    toString(): string {
        return `Student ID: ${this.id}, Name: ${this.name}`;
    }

}

export {Student};