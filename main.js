// ナビゲーションバー固定
$(function() {
    let nav = $('#nav-bar');
    offset = nav.offset();
    $(window).scroll(function() {
        if($(window).scrollTop() > offset.top) {
            nav.addClass('fixed');
        } else {
            nav.removeClass('fixed');
        }
    });
});