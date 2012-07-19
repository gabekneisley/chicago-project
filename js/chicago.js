$(document).ready(function () {
    $('#navbar').scrollspy();
    $('.infobutton').click(function(e) {
        $( $(this).attr('data-content') ).toggleClass("hidden");
        $(this).children().first().toggleClass("icon-chevron-down").toggleClass("icon-chevron-up");
    });
});