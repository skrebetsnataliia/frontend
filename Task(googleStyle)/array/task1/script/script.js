/**
 * @author Nataliia Skrebets 
 */
/**
 *function initiazite an arry (numbers in array from -100 to 100).
 * @param {Array} Arr
 * @param {Number} number
 * @return {Object}
 */
let myArr = new Array();

function randomNumber(Arr, number) {
    for (let i = 0; i < number; i++) {
        Arr[i] = Math.floor(Math.random() * (-100)) + 100;
    }
    return myArr;
}

/**
 *function output number > 10
 * @param {Array} Arr
 * @return {Object}
 */
function filtArray(Arr) {
    let biggetTen = Arr.filter((number) => { return number > 10 });
    console.log(biggetTen);
    return biggetTen;
}
randomNumber(myArr, 5);
filtArray(myArr);