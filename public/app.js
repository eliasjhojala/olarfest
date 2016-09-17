
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
