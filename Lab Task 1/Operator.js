let age=20;
let statuse = (age>=18)? "Adult":"Minor";
console.log(statuse);

let arr1=[1,2,3,4,];
let arr2=[...arr1];
console.log(arr2);

let arr3=[7,8,9];
let combinedArray=[...arr1,...arr3];
console.log(combinedArray);

let newarr=[0,...arr1,5];
console.log(newarr);

function sum(a,b,c){
    return a+b+c;
}
let numbers=[1,2,3];
let result=sum(...numbers);
console.log(result);

let Object1={name:"jhon", age:20};
let Object2={...Object1};
console.log(Object2);

let Object3={city:"New yourk",...Object2};
console.log(Object3);

function summ(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number;
    }

    return total;
}

let res=summ(1,2,3,4);
console.log(res);

res=summ(10,29);
console.log(res);