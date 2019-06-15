console.log("Task1");
var array = new Array();
var k = 0;
var arrElem = "1";
while (arrElem != null) {
    arrElem = prompt("Enter element", 0);
    if (arrElem != null) {
        array[k] = arrElem;
    }
    k++;
}
console.log(array);

var matrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1],
    [1, 1, 1, 1, 1, 1]
]
var sum = 0;
for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    }
}
console.log(sum);
console.log("  ");
console.log("Task2");
var loremStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
var loermArr = loremStr.split(" ");
for (var i of loermArr) {
    if (i.length > 5) {
        console.log(i);
    }
}
console.log("  ");
console.log("Task3");
var arr1 = [1, 9, 22, 7, 6];
arr1.splice(3, 0, 8);
console.log(arr1);

console.log("  ");
console.log("Task4");

console.log(arr1);

function randonNumber(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    console.log(arr);
    return arr;
}
randonNumber(4);

while (true) {
    var isArr1 = prompt("Enter number for searching:", 0);
    if (isArr1 === null) {
        break;
    }
    console.log(arr1.indexOf(Number(isArr1)));
}

console.log("  ");
console.log("Task5");
var maxWord = "";
loermArr.forEach(function(item, i, arr) {
    if (item.length > maxWord.length) {
        maxWord = item;
    }
})
console.log(maxWord);

var mapArr = [8, 6, 12, 10];
var newMapArr = mapArr.map(function(elem) {
    return elem * elem;
})
console.log(newMapArr);