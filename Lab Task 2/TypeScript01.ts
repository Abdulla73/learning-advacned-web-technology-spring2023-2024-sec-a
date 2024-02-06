
let a:number =10;
let b:string ="Hello";
let c:boolean =true;

function add(a:number, b:number):number{
    return a+b;
}

console.log(add(10,20));

type person ={id:number, name:string};
let p:person={id:1, name:"jhon"};
console.log(p);

let y:number | string;
y=10;
console.log(y);

let z:"red" |"green"|"blue"
z ="red";
console.log(z)

let data:any;
data="something";
console.log(data)

enum Color {red,green,blue}
let color:Color= Color.red;
console.log(color);

let employee:[number, string];
employee=[1,"jhon"];
console.log(employee);

let numbers: number[]=[1,2,3,4,5];
let firstelement: number=numbers[0];
console.log(firstelement);


let arraylength: number= numbers.length;
numbers.push(6);

for(let num of numbers){
    console.log(num);
}


let daoublenumbers:number[]=numbers.map((num:number)=> num*2);
console.log(daoublenumbers);
let evennumber:number[]=numbers.filter((num:number)=>num%2==0);
console.log(evennumber);
let sum:number=numbers.reduce((prev:number, next:number)=>prev+next);
console.log(sum);

function addnumbers(a:number,b:number):number{
    return a+b;
}
console.log(addnumbers(10,29));

let addnumbers2=(a:number,b:number):number => a+b;
console.log(addnumbers2(10,29));

function addnumbers3(a:number,b:number,c?:number):number{
    return a+b+(c??0);
}

function addnumbers4(a:number,b:number,c:number=0):number{
    return a+b+c;
}

function addnumbers5(...nums:number[]):number{
    let sum:number=0;
    for(let num of nums){
        sum+=num;
    }

    return sum;
}

function addnumbers6(a:number,b:number):number;
function addnumbers6(a:string,b:string):string;
function addnumbers6(a:any,b:any):any{
    return a+b;
}
console.log(addnumbers6(10,20));

class employe{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    display():void{
        console.log(`id=${this.id},name=${this.name}`);
    }
}
let emp1= new employe(1,"Alvi");
emp1.display();

class employe1{
    private id:number;
    private name:string;
    protected age:number;
    public isOkey:boolean;
    constructor(id:number,name:string,age:number,isOkey:boolean){
        this.id=id;
        this.name=name;
        this.age=age;
        this.isOkey=isOkey;
    }

    display():void{
        console.log(`id=${this.id},name=${this.name},age=${this.age},isOkey=${this.isOkey}`);
    }
}

let emp2 =new employe1(1,"steve",21,false);
emp2.display();

function display<T>(id:T,name:T):void{
    console.log(`id=${id},name=${name}`);
}

display<number | string>(101, "steve");
display<string>("102", "bill");

interface IEmploye{
    id:number;
    name:string;
    display():void;
}

class employe6  implements IEmploye{
    id: number;
    name: string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }

    display(): void {
        console.log(`id=${this.id},name=${this.name}`);
    }
}

let emp6 =new employe6(1,"steve");
emp6.display();



