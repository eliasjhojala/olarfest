var linkBarAlpha
var popup;

function smallDisplay() {
  return $(window).width() < 888;
}

$(function() {
  if ($(window).width() > 800) {
      $('#teaserVideo').html('<source src="teaser.mp4" type="video/mp4">');
  } else if ($(window).width() > 600) {
      $('#teaserVideo').html('<source src="teaser_LowRes.mp4" type="video/mp4">');
  } else {
      $('#teaserVideo').html('<source src="teaser_LowRes2.mp4" type="video/mp4">');
  }
  
  linkBarAlpha.init();
  popup.init();
  
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
    var value = $('#teaser').height() / 2 - 35;
    if (smallDisplay()) value += $('#linkbar').outerHeight();
    $('.playButton').css("top", value + "px");
  }
  function linkBarFlow() {
    if (smallDisplay()) {
      $('.black').css('margin-top', $('#linkbar').outerHeight() + "px");
    } else {
      $('.black').css('margin-top', '0');
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
    var self = linkBarAlpha;
    self.linkbar = $('#linkbar');
    self.teaser = $('#teaser');
    self.top = self.linkbar.css("background-color");
    self.originalColor = self.top.replace(/rgba\((.+),.+\)/, '$1');
    self.top = Number(self.top.replace(/^.*,(.+)\)/,'$1'));
    $( window ).on('scroll resize', self.set);
    self.set();
  },
  set: function() {
    var self = linkBarAlpha;
    var color = "rgba(" + self.originalColor + ", " + self.getAlpha() + ")";
    self.linkbar.css("background-color", color);
  },
  getAlpha: function() {
    var self = linkBarAlpha;
    if (smallDisplay()) return 1;
    var end = self.teaser.height() - self.linkbar.outerHeight();
    var start = end * 0.6;
    var current = $(window).scrollTop();
    end -= start;
    current -= start;
    return clamp(current / end, 0, 1) * (self.bottom - self.top) + self.top;
  }
};

popup = {
  element: null,
  backgroundElement: null,
  contentElement: null,
  init: function() {
    var self = popup;
    self.element = $('#popup');
    self.backgroundElement = $('#popupBackground');
    self.contentElement = $('#popupContent');
    $('.open-popup').click(function(e) {
      e.preventDefault();
      self.show($(this).data('popup-url'));
    });
    $('.close-popup').click(function(e) {
      e.preventDefault();
      self.hide();
    });
  },
  show: function(contentUrl) {
    var self = popup;
    self.contentElement.load(contentUrl);
    self.backgroundElement.show();
    self.element.show();
  },
  hide: function() {
    var self = popup;
    self.backgroundElement.hide();
    self.element.hide();
    self.contentElement.html("");
  }
};
