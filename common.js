// Navbar shrink on scroll
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 0) {
    $('.navbar').addClass('navbar-scroll');
    $('.navbar-brand img').css('height', '33px');
  } else {
    $('.navbar').removeClass('navbar-scroll');
    $('.navbar-brand img').css('height', '42px');
  }
});
