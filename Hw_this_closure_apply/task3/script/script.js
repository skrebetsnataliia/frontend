function Сalculator() {
    this.num1 = Number(prompt("Enter number", 0));
    this.num2 = Number(prompt("Enter number", 0));
    this.sum = function() {
        return this.num1 + this.num2;
    }
    this.mul = function() {
        return this.num1 * this.num2;
    }
}

var calculator = new Сalculator();

alert("Cума: " + calculator.sum());
alert("Добуток: " + calculator.mul());