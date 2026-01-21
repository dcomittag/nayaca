// Navbar shrink on scroll
window.addEventListener('scroll', () => {
  document
    .querySelector('.navbar')
    ?.classList.toggle('navbar-scroll', window.scrollY > 0);
});

