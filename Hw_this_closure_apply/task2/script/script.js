var calculator = {
    num1: Number(prompt("Enter number", 0)),
    num2: Number(prompt("Enter number")),
    sum: function() {
        return this.num1 + this.num2;
    },
    mul: function(a, b) {
        return this.num1 * this.num2;
    }

}
alert(calculator.sum());
alert(calculator.mul());