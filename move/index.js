$(document).ready(function () {
  var top = 0;
  var left = 0;

  var $innerDiv = $('.box');
  var $outerDiv = $('.canvas');

  var outerDivWidth = $outerDiv.width();
  var outerDivHeight = $outerDiv.height();
  var innerDivWidth = $innerDiv.width();
  var innerDivHeight = $innerDiv.height();

  $('.btn-up').click(function () {
    if (top > 0) {
      top -= 50;
      $('.box').animate({top: "-=50px",}, "slow");
    }
  });

  $('.btn-right').click(function () {
    if (left < outerDivWidth - innerDivWidth) {
      left += 50;
      $('.box').animate({left: "+=50px",}, "slow");
    }
  });
  
  $('.btn-down').click(function () {
    if (top < outerDivHeight - innerDivHeight) {
      top += 50;
      $('.box').animate({top: "+=50px",}, "slow");
    }
  });
  
  $('.btn-left').click(function () {
    if (left > 0) {
      left -= 50;
      $('.box').animate({left: "-=50px",}, "slow");
    }
  });
  
  $('.btn-special').click(function () {
    $('.box')
      .animate({left: outerDivWidth - innerDivWidth,}, "slow")
      .animate({top: outerDivHeight - innerDivHeight,}, "slow")
      .animate({left: 0,}, "slow")
      .animate({top: 0,}, "slow");
  });
});