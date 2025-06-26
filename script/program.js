$(function () {
  // 탭 전환
  $('.tab-btn').on('click', function (e) {
    e.preventDefault();
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    if ($(this).hasClass('edu')) {
      $('#edu').show();
      $('#workshop').hide();
    } else {
      $('#workshop').show();
      $('#edu').hide();
    }
  });

  // 슬라이드 함수
  function setupSlide(mainId, thumbSelector, arrowSelector) {
    const $main = $(mainId);
    const $thumbs = $(thumbSelector);
    const $arrow = $(arrowSelector);

    function bind() {
      $thumbs.find('.thumb').off('click').on('click', function () {
        const newSrc = $(this).attr('src');
        const oldSrc = $main.attr('src');
        $main.fadeOut(300, function () {
          $main.attr('src', newSrc).fadeIn(300);
        });
        $(this).attr('src', oldSrc);
      });
    }

    bind();

    $arrow.on('click', function (e) {
      e.preventDefault();
      const currentSrc = $main.attr('src');
      const $first = $thumbs.find('.thumb').first();
      const nextSrc = $first.attr('src');
      $main.fadeOut(300, function () {
        $main.attr('src', nextSrc).fadeIn(300);
      });
      $first.remove();
      $thumbs.append(`<img src="${currentSrc}" class="thumb">`);
      bind();
    });
  }

  setupSlide('#main-edu', '.edu-thumbs', '.edu-next');
  setupSlide('#main-work', '.work-thumbs', '.work-next');
});
