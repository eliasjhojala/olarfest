var linkBarAlpha;

$( document ).ready(function() {
  linkBarAlpha.init();
  
  var allowVideoPlay = true;
  $('video').bind("timeupdate", function() {
    if(this.currentTime >= 11) {
      this.pause();
      allowVideoPlay = false;
    }
  });
  
  $(document).on('touchstart click', function () {
    if(allowVideoPlay) $('video').get(0).play();
  });
  
  $('video').on('play', function () {
    $('.playButton').css("display", "none")
  });
  
  function playButtonLocation() {
    $('.playButton').css("top", String($('#teaser').height() / 2 - 35 + $('#linkbar').outerHeight()) + "px");
  }
  function linkBarFlow() {
    if ($(window).width() < 888) {
      $('.black').css('padding-top', $('#linkbar').outerHeight() + "px");
    } else {
      $('.black').css('padding-top', '0');
    }
  }
  playButtonLocation();
  linkBarFlow();
  $(window).resize(function() {
    playButtonLocation();
    linkBarFlow();
  });
});

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

linkBarAlpha = {
  linkbar: null,
  teaser: null,
  top: null,
  bottom: 1,
  originalColor: null,
  init: function() {
    this.linkbar = $('#linkbar');
    this.teaser = $('#teaser');
    this.top = this.linkbar.css("background-color");
    this.originalColor = this.top.replace(/rgba\((.+),.+\)/, '$1');
    this.top = Number(this.top.replace(/^.*,(.+)\)/,'$1'));
    $( window ).on('scroll resize', () => this.set());
    this.set();
  },
  set: function() {
    var color = "rgba(" + this.originalColor + ", " + this.getAlpha() + ")";
    this.linkbar.css("background-color", color);
  },
  getAlpha: function() {
    if ($(window).width() < 888) return 1;
    var end = this.teaser.height() - this.linkbar.outerHeight();
    var start = end * 0.6;
    var current = $(window).scrollTop();
    end -= start;
    current -= start;
    return clamp(current / end, 0, 1) * (this.bottom - this.top) + this.top;
  }
}
