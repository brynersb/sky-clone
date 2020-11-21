
function initCarousel() {
 
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 8,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    340: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
    1500: {
      slidesPerView: 8,
      spaceBetween: 50,
    },
  }

});

}

