/**
 * @author Nataliia Skrebets 
 */
/**
 *function which checks a lenght of string
 * @param {String} str
 * @param {Number} maxlenght
 * @return {String}
 */
function trimSrting(str, maxlenght) {
    if (str.length > maxlenght) {
        var differt = str.length - maxlenght;
        str = str.split("").reverse().join("");
        str = str.substr(differt, str.length);
        str = str.split("").reverse().join("");
        str = str.replace(str[str.length - 1], "...");
    }
    return str;
}

console.log(trimSrting("wesdrtfgyhjgf", 5));