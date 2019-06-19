var setGetName = function(name) {
    var setName = function() {
        console.log(name);
        var getName = function() {
            return name;
        }
        return getName();
    }
    return setName;
}
var myName = setGetName(prompt("Enter your name:"));
myName();