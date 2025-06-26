
$(document).ready(function () {
  let current = 0;
  const $slides = $(".slide");
  const total = $slides.length;

  function goToSlide(index) {
    $slides.removeClass("active");
    $slides.eq(index).addClass("active");
    current = index;
  }

  // 자동 롤링
  setInterval(function () {
    let next = (current + 1) % total;
    goToSlide(next);
  }, 5000); // 5초 간격

  // 클릭 시 수동 이동 + current 갱신
  $slides.click(function () {
    const index = $(this).index();
    goToSlide(index);
  });
});
