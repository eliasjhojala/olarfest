
var topOpacity;
var bottomOpacity;
var linkbar, teaser;

$( document ).ready(function() {
  initLinkbarOpacity();
  setOpacity();
  $( window ).scroll(function() {
    setOpacity();
  });
  
  $('video').bind("timeupdate", function() {
    if(this.currentTime >= 11) {
      this.pause();
    }
  });
  
  function playButtonLocation() {
    $('.playButton').css("top", String($('#teaser').height() / 2 - 40) + "px");
  }
  playButtonLocation();
  
  $(document).on('touchstart', function () {
    $('video').get(0).play();
  });
  
  $('video').on('play', function () {
    $('.playButton').css("display", "none")
  });
  
  function linkBarFlow() {
    if ($(window).width() < 888) {
      $('.black').css('padding-top', $('#linkbar').outerHeight() + "px");
    } else {
      $('.black').css('padding-top', '0');
    }
  }
  linkBarFlow();
  $(window).resize(function() {
    playButtonLocation();
    linkBarFlow();
  });
});

$( document ).ready(function() {
});

function initLinkbarOpacity() {
  //calcuate variables from the html/css
  linkbar = $('#linkbar');
  teaser = $('#teaser');
  topOpacity = linkbar.css("background-color");
  topOpacity = Number(topOpacity.replace(/^.*,(.+)\)/,'$1'));
  bottomOpacity = 1;
  
  console.log(linkbar.css("background-color"));
}

function setOpacity() {
  function calculate() {
    if ($(window).width() < 888) return 1;
    var start = (teaser.height() / 1.4);
    var current = teaser.height() - $(window).scrollTop() - linkbar.outerHeight();
    var max = teaser.height() - linkbar.outerHeight();
    var opacity = 1 - (current / max * (bottomOpacity - topOpacity));
    
    if (opacity > 1) {
      opacity = 1;
    }
    if (opacity < topOpacity) {
      opacity = topOpacity;
    }
    return opacity;
  }
  linkbar.css("background-color", "rgba(0,0,0,"+calculate()+")");
}
