$(function () {
  const poster = $('.right-img');
  const textTop = $('.left-text').offset().top;
  const contentEnd = $('.footer').offset().top;
  const posterHeight = poster.outerHeight();
  const offsetRight = (window.innerWidth - 1240) / 2;

  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    const bottomLimit = contentEnd - posterHeight - 30;

    if (scrollTop >= textTop && scrollTop < bottomLimit) {
      poster.css({
        position: 'fixed',
        top: '120px',
        right: offsetRight + 'px'
      });
    } else if (scrollTop >= bottomLimit) {
      const topValue = contentEnd - posterHeight - textTop - 30;
      poster.css({
        position: 'absolute',
        top: topValue + 'px',
        right: '0'
      });
    } else {
      poster.css({
        position: 'absolute',
        top: '0',
        right: '0'
      });
    }
  });
  
});




