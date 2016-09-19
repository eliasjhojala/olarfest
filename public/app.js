function scrollToElement(elementName) {
  var scrollTop    = $('body').scrollTop(),
    elementOffset  = $(elementName).offset().top,
    distance       = (elementOffset - scrollTop);
    
    distance = Math.min(Math.abs( distance ), 1500);
    
  $('html, body').animate({
    scrollTop: $(elementName).offset().top - 100
  }, distance);
}


$(document).ready(function () {
  $('#linkBarLinks a').click(function(e) {
    e.preventDefault();
    var element = $(this).attr('href');
    if (element !== "#") {
      history.pushState({}, '', element);
      scrollToElement(element);
    }
  });
});
