// Toggle menu on mobile
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  links.classList.toggle('open');
  // Add margin to the container so content moves down
  const container = document.querySelector('.container');
  if (links.classList.contains('open')) {
    container.style.marginTop = links.offsetHeight + 'px';
  } else {
    container.style.marginTop = null; // reset
  }
});

// Shrink navbar on scroll
window.addEventListener('scroll', () => {
  document.querySelector('.nav')
    .classList.toggle('nav-scroll', window.scrollY > 0);
});
