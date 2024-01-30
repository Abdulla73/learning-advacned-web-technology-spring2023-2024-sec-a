import { greetings} from "./Module1.js";
import farewell from "./Module1.js";

function greet(timeofday){
    console.log(greetings[timeofday]);
}

console.log(farewell);

export function sayGoodbye(){
    console.log(farewell);
}