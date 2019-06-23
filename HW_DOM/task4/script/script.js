document.getElementById("list");
for (var i = 1; i < 6; i++) {
    var newLi = document.createElement("li");
    newLi.innerHTML = i;
    list.appendChild(newLi);
}