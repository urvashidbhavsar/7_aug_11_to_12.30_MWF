// target = header
// perform = window
$(function () {
    $(window).scroll(function () {
        $current = $(this).scrollTop();
        if ($current > 0) {
            $("header").addClass("scrollheader")
        } else {
            $("header").removeClass("scrollheader")
        }
    })
})
