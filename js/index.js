/**
 * 슬라이드
 * https://swiperjs.com/
 */
const mainSlide = new Swiper(".main-visual__slide", {
  spaceBetween: 0,
  loop: false, //슬라이드 반복 여부
  // autoplay: {
  //   //자동슬라이드
  //   delay: 2500, // 시간 설정
  //   disableOnInteraction: false, // false-스와이프 후 자동 재생
  // },
  // 네비게이션
  navigation: {
    prevEl: ".slide__skip-navigation--prev",
    nextEl: ".slide__skip-navigation--next",
  },
  // 페이징
  pagination: {
    el: ".slide__pagination--pagination",
    type: "custom",
    clickable: false, //버튼 클릭 여부
    renderCustom: function (swiper, current, total) {
      return (
        "<span class='current_page'>" +
        "0" +
        current +
        "</span>" +
        "<span class='total_page'>" +
        "0" +
        total +
        "</span>"
      );
    },
    clickable: false, //버튼 클릭 여부
  },
  a11y: {
    enabled: true,
    nextSlideMessage: "다음 슬라이드",
    prevSlideMessage: "이전 슬라이드",
    slideLabelMessage: "{{index}}장의 슬라이드 중 {{slidesLength}}번 슬라이드",
  },
});
// 메인 슬라이드 progress Bar
const pagingSwiper = new Swiper(".main-visual__slide", {
  pagination: {
    el: ".slide__pagination--progressbar",
    type: "progressbar",
  },
});

//Main Swiper로 progress Bar 제어
mainSlide.controller.control = pagingSwiper;
