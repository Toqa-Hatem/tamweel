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
  $('.partners-carousel').owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    nav: true,
    rtl: true,
    margin: 45,
    pagination: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false
      },
      600: {
        items: 2,
        nav: true
      },
      850: {
        items: 3,
        nav: true
      },
      1050: {
        items: 4,
        nav: true
      }

    }
  });

  $(".owl-prev > span").html('<i class="fa fa-chevron-left"></i>');
  $(".owl-next > span").html('<i class="fa fa-chevron-right"></i>');
});



