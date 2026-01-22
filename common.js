// Toggle menu on mobile
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
  
});

// Shrink navbar on scroll
window.addEventListener('scroll', () => {
  document.querySelector('.nav')
    .classList.toggle('nav-scroll', window.scrollY > 0);
});
