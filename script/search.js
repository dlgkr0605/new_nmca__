$(document).ready(function(){
  $('.search').click(function(e){
    e.preventDefault();
    e.stopPropagation();

    const $searchBox = $('.search-box');
    if ($searchBox.is(":visible")) {
      $searchBox.slideUp(300);
    } else {
      $searchBox.slideDown(300);
    }
  });

  $(document).click(function(e){
    if (!$(e.target).closest('.search-box, .search').length) {
      $('.search-box').slideUp(250);
    }
  });
});