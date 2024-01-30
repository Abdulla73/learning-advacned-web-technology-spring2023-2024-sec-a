let number = [1,2,3,4,5];
let fruits =['apple','banana','strawberry','orange'];
let mixedarray =[1,'two',{names:'alice'},[7,8,9]];

console.log(number);
console.log(fruits);
console.log(mixedarray);

let firstelements = number[0];
let secondelements= fruits[1];
let thirdelements = mixedarray[2];

console.log(firstelements);
console.log(secondelements);
console.log(thirdelements);

let one= number.push(6);
console.log(number);
let two= fruits.pop();
console.log(fruits);
let three= number.unshift("mojo");
console.log(number);
let four= fruits.shift();
console.log(fruits);


number.forEach(function(number){
    console.log(number)
});

let doublenumbers =number.map(function(number){
    return number*2;
});

console.log(doublenumbers);

const numbers=[1,2,3,4,5]
const evennumber= numbers.filter(function(num){
    return num % 2 ===0;
});
console.log(evennumber);
