/**
 * @fileoverview Rewrite code to ternary operator
 * @author Nataliia Skrebets 
 */

let a = 5;
let b = 8;
//Code
if (a === b) {
    rezult = "a and b are equal";
    console.log(rezult);
} else if (a > b) {
    rezult = "a is greater";
    console.log(rezult);
} else {
    rezult = "b is greater";
    console.log(rezult);
}

(a == b) ? (rezult = "a and b are equal") : ((a > b) ? (rezult = "a is greater") : (rezult = "b is greater"));