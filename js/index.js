/**
 * Navigation
 */

const nav = document.querySelector('.nav');
const navIcon = document.querySelector('.nav .nav-icons')

navIcon.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});


/**
 * Swiper
 */

// ----------Hero---------------------
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

// ----------Blog Carousel-------------
const swiperBlog = new Swiper(".blog-carousel", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 768
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});