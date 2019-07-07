$(document).ready(function() {
    $('.modal-toggle').on('click', function(e) {
        e.preventDefault();
        $('.modal').toggleClass('is-visible');
    });

    $(window).resize(function(e) {
        if ($(window).width() < 768) {
            e.preventDefault();
            $('.modal').toggleClass('is-visible');
        }
    })
})