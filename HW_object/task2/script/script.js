String.prototype.repeat = function() {
    var getString = new Array(2).join(this);
    var Str = "";
    var newString = "";
    for (var i = 1; i < getString.length - 1; i++) {
        Str += getString[i];
    }
    newString += getString[0].toUpperCase() + Str + getString[getString.length - 1].toUpperCase();
    return newString;
}
console.log("sssrting".repeat());