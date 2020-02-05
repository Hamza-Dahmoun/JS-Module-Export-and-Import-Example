//in this file we're going to import functions from math_functions.js file and use them


import * as myMathModule from "./modules/math_functions.js";
import divide from "./modules/general_functions.js";



let x = 10;
let y = 5;

console.log("The sum is: " + myMathModule.add(x, y));

console.log("The subtraction is: " + myMathModule.subtract(x, y));

console.log("The production is: " + myMathModule.multiply(x, y));

console.log("The division is: " + divide(x, y));