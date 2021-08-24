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
    576: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
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

/**
 * Blog pagination
 */

const paginationEl = document.querySelector(".pagination ul");
let totalPages = 6;
let page = 2;


const createPagination = (totalPages, page) => {
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;

  // hien thi nut Prev neu trang lon hon 1
  if (page > 1) {
    liTag += `<li class="btn-pagination btn-pagination-prev" onClick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`
  }

  // neu trang lon hon 2 thi hien thi trang 1
  if (page > 2) {
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;

    // neu trang lon hon 3 thi hien thi ba cham (...)
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  // so trang hien thi truoc trang hien tai
  if (page === totalPages || page === totalPages -1) {
    beforePage -= 1;
  } 

  // so trang hien thi sau trang hien tai
  if (page === 1) {
    afterPage += 1
  }

  for (let i = beforePage; i <= afterPage; i++) {
    if (i > totalPages ) {
      continue;
    }
    if (i === 0) {
      i += 1;
    }
    if (i === page) {
      active = 'active';
    } else {
      active = '';
    }

    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${i})"><span>${i}</span></li>`;
  }

  // neu trang hien tai nho hon tong so trang tru 1 thi hien thi trang cuoi
  if (page < totalPages -1) {
    // neu trang hien tai nho hon tong so trang tru 2 thi hien thi ba cham (...)
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  // hien thi nut Next neu trang nho hon tong so trang
  if (page < totalPages) {
    liTag += `<li class="btn-pagination btn-pagination-next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }

  paginationEl.innerHTML = liTag;
  return liTag;
}

paginationEl.innerHTML = createPagination(totalPages, page);
