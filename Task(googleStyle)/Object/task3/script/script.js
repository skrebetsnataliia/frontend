/**
 * @author Nataliia Skrebets 
 */
/**
 * @constructor @extends {User}
 * @param {String} firstName
 * @param {String} lastName
 * @param {String} email
 * @param {Number} zip
 */
function Worker(name, surName, rate, days) {
    this.name = name;
    this.surName = surName;
    this.rate = rate;
    this.days = days;
    this.getSalary = (rate, days) => {
        return this.rate * this.days;
    }
}

var worker = new Worker('Іван', 'Іванов', 10, 31);
console.log(worker.name);
console.log(worker.surName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());