$(function () {
  const $scroll = $('.exh-scroll');
  let isDown = false;
  let startX, scrollLeft;
  let dragged = false;

  // 이미지 드래그 방지
  $scroll.find('img, a').on('dragstart', function (e) {
    e.preventDefault();
  });

  // 마우스 누를 때
  $scroll.on('mousedown', function (e) {
    isDown = true;
    dragged = false;
    startX = e.pageX;
    scrollLeft = $scroll.scrollLeft();
  });

  // 마우스 뗄 때
  $(document).on('mouseup', function () {
    isDown = false;
  });

  // 마우스 움직일 때
  $scroll.on('mousemove', function (e) {
    if (!isDown) return;
    const x = e.pageX;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      dragged = true;
    }
    $scroll.scrollLeft(scrollLeft - walk);
  });

  // 드래그 중 링크 막기
  $scroll.on('click', 'a', function (e) {
    if (dragged) {
      e.preventDefault();
    }
  });

  // 영역 벗어날 때 드래그 해제
  $scroll.on('mouseleave', function () {
    isDown = false;
  });

  // 4개씩 넘기기 위한 너비 계산
  const itemWidth = $('.exh-item').outerWidth(true); // margin 포함
  const scrollAmount = itemWidth * 4;

  $('.scroll-btn.next').click(function () {
    $scroll.animate({ scrollLeft: $scroll.scrollLeft() + scrollAmount }, 500);
  });

  $('.scroll-btn.prev').click(function () {
    $scroll.animate({ scrollLeft: $scroll.scrollLeft() - scrollAmount }, 500);
  });
});
