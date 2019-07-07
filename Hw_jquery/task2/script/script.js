$(document).ready(function() {
    for (var i = 4; i < 9; i++) {
        $("#list").append("<li>AddLine</li>");
    }
    $("li").css("list-style", "none");
    $("li").each(function(index, element) {
        var elem = $(element).text()
        element.prepend((index + 1) + ".  ");
    })
})