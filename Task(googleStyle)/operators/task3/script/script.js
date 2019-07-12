/**
 * @author Nataliia Skrebets 
 */
/**
 * function which output all odd numbers in range
 * @param {Number} firstNumner
 * @param {Number} lastNumber
 */
function EvenNumber(firstNumber, lastNumber) {
    for (let i = firstNumber; i <= lastNumber; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

let firstNumberRange = 20;
let lastNumberRanger = 40;
EvenNumber(firstNumberRange, lastNumberRanger);