/**
 * @author Nataliia Skrebets 
 */
/**
 *function which counts numder substing in string
 * @param {String} str
 * @param {String} word
 * @return {Number} 
 */
var city = {
        "Zarephath": 728375,
        "Reinerton": 864402,
        "Spelter": 340533,
        "Henrietta": 932557,
        "Dyckesville": 421758,
        "Yettem": 250492,
        "Gracey": 551885,
        "Floris": 216435,
        "Davenport": 290139,
        "Tioga": 653031
    }
    /**
     *function which finds  max population
     * @param {Object} obj
     */

function searchMaxPopulation(obj) {
    var maxPopulatin = 0;
    for (var key in obj) {
        if (maxPopulatin < obj[key]) {
            maxPopulatin = obj[key];
        }
    }
    return maxPopulatin;
}


console.log(searchMaxPopulation(city));