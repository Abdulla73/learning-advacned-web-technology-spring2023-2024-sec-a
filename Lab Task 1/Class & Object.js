class Person {
    constructor(name, age) {
        this.name = name;  
        this.age = age;    
    }

    speak() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const john = new Person('John', 20);
john.speak();

class student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade=grade;
    }

    study(){
        console.log(`${this.name},'s grade is ${this.grade}`);
    }
}

const std =new student("Abdulla",20, 99);
std.speak();
std.study();

console.log(Object.keys(std));
console.log(Object.values(std));
console.log(Object.entries(std));


