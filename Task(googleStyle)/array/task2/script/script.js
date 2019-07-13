/**
 * @fileoverview Rewrite code to ternary operator
 * @author Nataliia Skrebets 
 */

let strLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
let arrLorem = strLorem.split(' ');
/**
 *function for sort of array element by lenght
 * @param {Array} strArr
 * @return {Array}
 */
function sortSrting(strArr) {
    for (let i = 0, endI = arrLorem.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arrLorem[j].length > arrLorem[j + 1].length) {
                let temp = arrLorem[j];
                arrLorem[j] = arrLorem[j + 1];
                arrLorem[j + 1] = temp;
            }
        }
    }
    return strArr;
}

sortSrting(arrLorem);
strLorem = arrLorem.join(" ");
console.log(strLorem);