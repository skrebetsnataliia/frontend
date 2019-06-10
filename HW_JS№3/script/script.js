console.log("Task1");

function isEven(min, max) {
    var n = Math.round(Math.random() * max + min);
    console.log("n=", n);
    if (n % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
    return 0;
}
isEven(2, 6);

console.log(" ");
console.log("Task2");
var newSting = "";
var arr = ["Lorem", "ipsum", "dolor", "Sit", "amet", "Consectetur"];
for (var i of arr) {
    var str1 = i;
    str1 = str1[0].toUpperCase();
    if (str1 == i[0]) {
        newSting = newSting.concat(" ", i);
    }
}
console.log(newSting);
var str3 = "ertyu",
    str4 = "ghjkiwe";

function biggerString(string1, string2) {
    if (string1.length > string2.length) {
        return string1;
    } else if (string1.length < string2.length) {
        return string2;
    } else {
        return 0;
    }

}
console.log(biggerString(str3, str4));