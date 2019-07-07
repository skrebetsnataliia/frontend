function Calculator(name) {
    this.name = name;
    this.mulRes = 0;
    this.addRes = 0;
}

Calculator.prototype.sum = function(num1, num2) {
    this.addRes = num1 + num2;
    console.log(this.name + ":" + this.addRes);
}

Calculator.prototype.mul = function(num1, num2) {
    this.mulRes = num1 * num2;
    console.log(this.name + ":" + this.mulRes);
}

var calc = new Calculator("Calc");
calc.sum(5, 6);
calc.mul(7, 8);