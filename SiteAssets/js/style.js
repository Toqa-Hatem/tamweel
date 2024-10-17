$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('header').addClass('scroll')
    } else {
        $('header').removeClass('scroll')
    }
})
/* Open the sidenav */
function openNav() {
  document.getElementById("sidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}
$(document).ready(function () {


});



