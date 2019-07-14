/**
 * @author Nataliia Skrebets 
 */
/**
 *function which counts numder substing in string
 * @param {String} str
 * @param {String} word
 * @return {Number} 
 */
function searchString(str, word) {
    let arr = str.split(" ");
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == word) {
            count++;
        }
    }
    return count;
}

console.log(searchString('lorem ipsun lorem', 'lorem'));