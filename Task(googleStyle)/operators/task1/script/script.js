/**
 * @author Nataliia Skrebets 
 */
/**
 * Implements a function, which makes a check, does number is present in range.
 * @param {Number} firstNumner
 * @param {Number} lastNumber
 * @return {number}
 */
function IsNumberInIntrval(firstNumner, lastNumber) {
    while (true) {
        let number = prompt("Enter number");
        if (number >= firstNumner && number <= lastNumber) {
            break;
        } else if (number == null) {
            break;
        }
    }
    return number;
}

let firstNumnerRange = 25;
let lastNumberRange = 99;
IsNumberInIntrval(firstNumnerRange, lastNumberRange);