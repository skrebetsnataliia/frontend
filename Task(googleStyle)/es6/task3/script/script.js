/**
 * @author Nataliia Skrebets 
 */
/**
 * function which output all odd numbers in range
 * @param {Number} name
 * @param {Number} price
 * @return {String}
 */
function calcTotal(name, number, price = 20) {
    let sum = price * number;
    console.log(sum);
    return price * number;
}
console.log(calcTotal("Bottle of water", 10));