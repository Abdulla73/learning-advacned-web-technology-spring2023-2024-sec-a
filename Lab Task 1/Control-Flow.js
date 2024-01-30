let age=18;

if (age >=18){
    console.log("Adult");
}
else if(age<=13){
    console.log("Tenneger");
}
else{
    console.log("Minor");
}

let age2 =15;
let statuss;

switch (true){
    case age2>=18:
        statuss="Adult";
        console.log(statuss);
        break;
    case age2>=13:
        statuss="Teenager";
        console.log(statuss);
        break;
    default:
        statuss="Minor";
        console.log(statuss);
}

let x =["a","b","c","d","e"]

for(i=0; i<3;i++){
    console.log(x[i]);
}

let x2 =["a","b","c","d","e"]
let i=0;
while(i<4){
    console.log(x2[i]);
    i++
}

let x3 =["a","b","c","d","e"]
let j=0;
do{
    console.log(x3[i]);
    j++;
    
}while(j<4);

let x4 =["a","b","c","d","e"]

for(let i in x4){
    console.log(x4[i]);
}

let x5 =["a","b","c","d","e"]

for(let i in x5){
    console.log(x5[i]);
}