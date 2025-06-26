$(document).ready(function () {
  let current = 0;
  const $slides = $(".slide");
  const total = $slides.length;
  let isDragging = false;

  // transition 적용 (로드 후)
  setTimeout(function () {
    $slides.addClass("animated");
  }, 100); // 살짝 딜레이 후 적용

  function goToSlide(index) {
    $slides.removeClass("active");
    $slides.eq(index).addClass("active");
    current = index;
  }

  // 자동 슬라이드
  setInterval(function () {
    let next = (current + 1) % total;
    goToSlide(next);
  }, 5000);

  // 드래그 체크
  $(".slides")
    .on("mousedown", function () {
      isDragging = false;
    })
    .on("mousemove", function () {
      isDragging = true;
    });

  // 클릭 시 슬라이드 이동 및 링크 처리
  $slides.on("click", function (e) {
    const $targetA = $(this).find("a");

    if (isDragging) {
      e.preventDefault();
      return;
    }

    // 슬라이드 클릭 시 수동 이동
    const index = $(this).index();
    goToSlide(index);

    // <a>가 아닌 부분 클릭 시 직접 이동
    if (!$(e.target).closest("a").length) {
      const href = $targetA.attr("href");
      if (href && href !== "#") {
        window.location.href = href;
      }
    }
  });
});
