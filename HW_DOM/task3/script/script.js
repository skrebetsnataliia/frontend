var y = document.getElementsByTagName("input");
for (var i = 0; i < y.length; i++) {
    document.getElementsByTagName("input")[i].setAttribute("checked", 0);
}
var x = document.getElementsByTagName("p");
for (var j = 0; j < x.length; j++) {
    document.getElementsByTagName("p")[j].classList.toggle("text");
}