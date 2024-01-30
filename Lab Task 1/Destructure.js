let numbers=[1,2,3,4];
let [a,b,c]=numbers;
console.log(a,b,c)

let person={names:"jhon",age:20};
let {names,age}=person;
console.log(names,age)

function printData({names,age}){
    console.log(`Name: ${names},Age:${age}`);
}

printData(person);