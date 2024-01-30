function greet(name){
    console.log(`Hello, ${name}`);
}

greet("Abdullah");

let greet2 = name=> console.log(`'Hello,${name}'`);
greet2("Abdullah");

function sum(a,b){
    return a+b;
}

let result =sum (a=5,b=10);
console.log(result);


function operateOneNumber(a,b,operation){
    return operation(a,b);
}

function add (a,b){
    return a+b;
}

function multiply (a,b){
    return a*b;
}

let resultAddition = operateOneNumber(2,5 ,add);
let resultMulti =operateOneNumber(2,5,multiply);

console.log(resultAddition);
console.log(resultMulti);
