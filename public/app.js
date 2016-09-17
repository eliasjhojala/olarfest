function scrollToElement(elementName) {
  $('html, body').animate({
    scrollTop: $(elementName).offset().top - 100
  }, 500);
}


$(document).ready(function () {
  $('#linkbar a').click(function(e) {
    e.preventDefault();
    var element = $(this).attr('href');
    if (element !== "#") {
      history.pushState({}, '', element);
      scrollToElement(element);
    }
  });
});
