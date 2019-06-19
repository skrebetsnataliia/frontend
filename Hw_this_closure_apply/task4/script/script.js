function sum() {
    return this.num1 + this.num2;
}

function mul() {
    return this.num1 * this.num2;
}
var calculator = {
    num1: Number(prompt("Enter a")),
    num2: Number(prompt("Enter b"))
}

alert("Сума: " + sum.call(calculator));
alert("Добуток: " + mul.call(calculator));

var calculator1 = {
    num1: Number(prompt("Enter a")),
    num2: Number(prompt("Enter b")),
    num3: 6,
    num4: 7
}

function sum1(numb1, numb2) {
    return this[numb1] + this[numb2];
}

function mul1(numb1, numb2) {
    return this[numb1] + this[numb2];
}
alert("Cума: " + sum.call(calculator1, "num1", "num2"));
alert("Добуток: " + mul.call(calculator1, "num1", "num2"));
alert("Cума: " + sum.apply(calculator1, ["num1", "num2"]));
alert("Добуток: " + mul.apply(calculator1, ["num1", "num2"]));