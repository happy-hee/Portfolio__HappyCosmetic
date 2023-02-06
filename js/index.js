/**
 * 메인 슬라이드
 * https://swiperjs.com/
 */
const mainSlide = new Swiper(".main-visual__slide", {
  spaceBetween: 0,
  loop: false,
  autoplay: {
    //자동슬라이드
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
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

/**
 * MD'S PICK 슬라이드
 */
const mdpickSlide = new Swiper(".section-mdpick__slide", {
  slidesPerView: "auto",
  spaceBetween: 14,
  autoplay: false,
  loop: false,
});

/**
 * 판매 랭킹 탭 메뉴
 */
const tabItem = document.querySelectorAll(".rank-tab__item");
const tabContent = document.querySelectorAll(".rank-tab__content");

tabItem.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // a 태그의 기본 동작(링크 연결) 방지
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });

    tabItem.forEach((content) => {
      content.classList.remove("active");
    });

    tabItem[index].classList.add("active");
    tabContent[index].classList.add("active");
  });
});

/**
 * 신제품 소식 슬라이드
 */
const newsSlide = new Swiper(".section-news__slide", {
  slidesPerView: "auto",
  spaceBetween: 14,
  autoplay: false,
  loop: false,
});

/**
 * 스크롤 방향에 따라 탑 버튼 숨기기
 */
const topBtn = document.querySelector(".top-btn");
// 이전 스크롤 위치
let lastScrollY = 0;
// 스크롤 이벤트
window.addEventListener("scroll", (e) => {
  // 현재 스크롤 위치(스크롤을 했을 경우 위치)
  let currentScrollY = window.scrollY;

  // 이전 스크롤 위치가 현재 스크롤 위치보다 작을 경우 (스크롤 DOWN)
  if (lastScrollY < currentScrollY) {
    topBtn.classList.remove("hidden");
    // 이전 스크롤 위치가 현재 스크롤 위치보다 클 경우 (스크롤 UP)
  } else {
    topBtn.classList.add("hidden");
  }

  // 이전 스크롤 위치에 현재 스크롤 위치 저장
  lastScrollY = currentScrollY;
});

/**
 * 헤더 햄버거버튼 클릭시 사이드메뉴 열기/닫기
 */
const sideMenuOpenBtn = document.querySelector(".header__burger-menu");
const sideMenuCloseBtn = document.querySelector(".side-menu--close-btn");
const sideMenu = document.querySelector(".side-menu");

//사이드메뉴 열기
sideMenuOpenBtn.addEventListener("click", () => {
  sideMenu.classList.add("side-menu--open");
});

//사이드메뉴 닫기
sideMenuCloseBtn.addEventListener("click", () => {
  sideMenu.classList.remove("side-menu--open");
});
