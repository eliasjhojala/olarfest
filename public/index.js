
var max;
var topOpacity;
var when = 0;
var bottomOpacity = 1;
var whenDoesFadeStart;

$( document ).ready(function() {
  initLinkbarOpacity();
  $('video').bind("timeupdate", function(){
      if(this.currentTime >= 11) {
          this.pause();
      }
  });
});

$( window ).scroll(function() {
  setOpacity()
});

function initLinkbarOpacity() {
  //calcuate variables from the html/css
  whenDoesFadeStart = (($("#teaser").height()) / 1.4)
  max = ($("#teaser").height() - $(window).scrollTop() - $("#linkbar").outerHeight()) - whenDoesFadeStart;
  topOpacity = $("#linkbar").css("background-color")
  topOpacity = Number(topOpacity.replace(/^.*,(.+)\)/,'$1'))
  
  console.log($("#linkbar").css("background-color"))
}

function setOpacity() {
  
  function calculateOpacity() {
    var current = $("#teaser").height() - $(window).scrollTop() - $("#linkbar").outerHeight();
    var opacity = (1 - (((current / max * (bottomOpacity - topOpacity)) + topOpacity) - topOpacity))
    
    if (opacity > 1) {
      opacity = 1
    }
    if (opacity < topOpacity) {
      opacity = topOpacity
    }
    
    //console.log(opacity)
    
    return opacity
  }
  
  //set opacity
  $("#linkbar").css("background-color", "rgba(0,0,0,"+calculateOpacity()+")")
}
