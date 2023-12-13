// target = nav
// perform = btn
$(document).ready(function () {
    $(".togglebtn").click(function () {
        $icon = $("#icon");
        $(".nav").toggleClass("navchange")
        if ($(".nav").hasClass("navchange") == true) {
            $icon.removeClass("fa-bars")
            $icon.addClass("fa-close")
        } else {
            $icon.removeClass("fa-close")
            $icon.addClass("fa-bars")
        }
    })
})
