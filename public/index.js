
$( document ).ready(function() {
  $('video').bind("timeupdate", function() {
    if(this.currentTime >= 11) {
      this.pause();
    }
  });
  
  function playButtonLocation() {
    $('.playButton').css("top", String($('#teaser').height() / 2 - 40 + "px");
  }
  playButtonLocation();
  
  $(document).on('touchstart', function () {
    $('video').get(0).play();
  });
  
  $('video').on('play', function () {
    $('.playButton').css("display", "none")
  });
  
  $(window).resize(playButtonLocation);
});
