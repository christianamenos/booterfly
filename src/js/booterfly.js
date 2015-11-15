$(document).ready(function(){
    $('body').on('click', '[data-toggle]', function (e) {
        $($(e.target).attr('data-toggle')).toggle();
    });
});