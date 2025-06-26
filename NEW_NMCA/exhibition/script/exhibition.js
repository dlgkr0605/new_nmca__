$(function () {
  const $scroll = $('.exh-scroll');
  let isDown = false;
  let startX, scrollLeft;

  // 마우스 클릭
  $scroll.on('mousedown', function (e) {
    isDown = true;
    startX = e.pageX - $scroll.offset().left;
    scrollLeft = $scroll.scrollLeft();
  });

  // 마우스 업
  $(document).on('mouseup', function () {
    isDown = false;
  });

  // 마우스 무브
  $scroll.on('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - $scroll.offset().left;
    const walk = (x - startX) * 1.5;
    $scroll.scrollLeft(scrollLeft - walk);
  });

  // 마우스 떠났을 때
  $scroll.on('mouseleave', function () {
    isDown = false;
  });

  // 버튼 클릭
  $('.scroll-btn.next').click(function () {
    $scroll.animate({ scrollLeft: $scroll.scrollLeft() + 320 }, 300);
  });
  $('.scroll-btn.prev').click(function () {
    $scroll.animate({ scrollLeft: $scroll.scrollLeft() - 320 }, 300);
  });
});
