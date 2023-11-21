// target = header
// perform = window
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    let current = this.window.scrollY;
    if (current > 0) {
        header.classList.add("scrollheader")
    } else {
        header.classList.remove("scrollheader")
    }
})