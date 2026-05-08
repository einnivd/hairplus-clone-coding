
// 홈화면 제품특징 - 반응형 스와이퍼
let swiper = undefined;

function initSwiper() {
  const screenWidth = window.innerWidth;

  // 480px 이하이고 Swiper가 없을 때만 생성
  if (screenWidth <= 480 && swiper === undefined) {
    swiper = new Swiper(".spec-swiper", {
      slidesPerView: 1.5,
      spaceBetween: 20,
      slidesOffsetBefore: 20,
      slidesOffsetAfter: 20,
      centeredSlides: false,
    });
  } 
  // 480px 초과인데 Swiper가 작동 중이면 삭제
  else if (screenWidth > 480 && swiper !== undefined) {
    swiper.destroy();
    swiper = undefined;
    // 파괴 후 레이아웃 깨짐 방지를 위해 style 제거
    document.querySelector('.swiper-wrapper').removeAttribute('style');
    document.querySelectorAll('.swiper-slide').forEach(slide => slide.removeAttribute('style'));
  }
}

// 초기 실행 및 화면 리사이즈 시 실행
window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);