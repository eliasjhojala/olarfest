var hashEnd = ".";

function scrollToElement(elementName) {
  var scrollTop    = $('body').scrollTop(),
    elementOffset  = $(elementName).offset().top,
    distance       = (elementOffset - scrollTop);
    
    distance = Math.min(Math.abs( distance ), 1500);
    
  $('html, body').animate({
    scrollTop: $(elementName).offset().top - 100
  }, distance);
}

$(function () {
  window.scrollTo(0, 0);
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var element = $(this).attr('href');
    if (element !== "#") {
      history.pushState({}, '', element + hashEnd);
      scrollToElement(element);
    }
  });
  if (window.location.hash) {
    setTimeout(function() {
      scrollToElement(
        window.location.hash.replace(new RegExp(hashEnd + "$"), "")
      );
    }, 4300);
  }
});
