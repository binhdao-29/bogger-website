const nav = document.querySelector('.nav');
const navIcon = document.querySelector('.nav .nav-icons')

navIcon.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});


// ----------Swiper-------------
const swiper = new Swiper(".hero", {});