// Navbar shrink on scroll
// Cache the navbar once
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('navbar-scroll', window.scrollY > 0);
});

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

