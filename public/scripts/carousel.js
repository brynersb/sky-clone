// ### carousel 1 matirealize

$(document).ready(function () {
  $('.carousel').carousel({
      duration:200
  });
});


// ### carousel2 Swipe

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 8,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});