// Navbar shrink on scroll
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const logo = document.querySelector('.navbar-brand img');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scroll');
      logo.style.height = '33px';
    } else {
      navbar.classList.remove('navbar-scroll');
      logo.style.height = '42px';
    }
  });
});

