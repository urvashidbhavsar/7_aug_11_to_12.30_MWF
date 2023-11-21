// target = nav
// perform = btn
function toggleMenubar() {
    let nav = document.querySelector(".nav");
    let icon = document.getElementById("icon");
    nav.classList.toggle("navchange")

    if (nav.classList.contains("navchange") == true) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-close")
    } else {
        icon.classList.remove("fa-close")
        icon.classList.add("fa-bars")
    }
}