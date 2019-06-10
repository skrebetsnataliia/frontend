console.log("task1");
var result = prompt("Enter number", "0");
if (result > 0) {
    console.log(1);
} else if (result < 0) {
    console.log(-1);
} else if (result == 0) {
    console.log(0);
} else if (result == null) {
    console.log("You didn't enter a number");
} else {
    console.log("It's not a number");
}
(result > 0) ? console.log(1): (result < 0) ? console.log(-1) : (result == 0) ? console.log(0) : (result == null) ? console.log("You didn't enter a number") : console.log("It's not a number");
console.log(" ");
console.log("Task2");
var numb = prompt("Enter number", 0);
switch (Number(numb)) {
    case 1:
        console.log("a");
        break;
    case 2:
        console.log("b");
        break;
    case 3:
        console.log("c");
        break;
    default:
        console.log("z");
        break;
}
console.log(" ");
console.log("Task3");
for (var i = 1; i < 10; i++) {
    console.log(i * i);
}
console.log(" ");
console.log("Task4");
var j = 1;
while (j < 10) {
    console.log(j * j);
    j++;
}
console.log(" ");
console.log("Task4");

function isBigger(a, b) {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else {
        return "=";
    }
}
console.log(isBigger(9, 9));