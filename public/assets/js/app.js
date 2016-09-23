var hashEnd = "_";

function scrollToElement(elementName) {
  var scrollTop    = $('body').scrollTop(),
    elementOffset  = $(elementName).offset().top - $('#linkbar').outerHeight() * 1.4,
    distance       = (elementOffset - scrollTop);
    
    distance = Math.min(Math.abs( distance ), 1500);
    
  $('html, body').animate({
    scrollTop: $(elementName).offset().top - $('#linkbar').outerHeight() * 1.4
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
    
    var videoIsPlaying = false;
    
      $('video').on('play', function () {
        videoIsPlaying = true;
      });
      
      setTimeout(function() {
        $(document).off('touchstart click');
        var wait = videoIsPlaying ? 3700 : 0;
        setTimeout(function() {
          scrollToElement(
            window.location.hash.replace(new RegExp(hashEnd + "$"), "")
          );
        }, wait);
      }, 500);


  }
});
