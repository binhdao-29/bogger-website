const nav = document.querySelector('.nav');
const navIcon = document.querySelector('.nav .nav-icons')

navIcon.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});


// ----------Swiper-------------
const swiper = new Swiper(".hero", {
  effect: "fade",
  grabCursor: "true",
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
  autoplay: {
    delay: 2500
  },
});
