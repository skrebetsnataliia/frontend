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
/**
 * function makes a check which paremetr is bigger, and output in console all odd numbers in range
 * @param {Number} firstNumner
 * @param {Number} lastNumber
 */
function Range(firstNumber, lastNumber) {
    if (lastNumber > firstNumber) {
        EvenNumber(firstNumber, lastNumber);
    } else {
        EvenNumber(lastNumber, firstNumber);
    }
}
let firstNumberRange = 20;
let lastNumberRanger = 40;
Range(firstNumberRange, lastNumberRanger);
Range(lastNumberRanger, firstNumberRange);