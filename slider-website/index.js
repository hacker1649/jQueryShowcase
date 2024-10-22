$(document).ready(function () {
  var total_slides = $(".slide");
  var slideIndex = 0;

  $(total_slides).hide();
  $(total_slides[slideIndex]).show();

  $(".dot[data-slide='0']").addClass('active');

  function showSlide(index) {
    $(total_slides).fadeOut(1000);
    $(total_slides[index]).fadeIn(1000);
    $(".dot").removeClass('active');
    $(".dot[data-slide='" + index + "']").addClass('active');
  }
  
  $(".prev-btn").click(function () {
    slideIndex -= 1;
    if (slideIndex < 0) {
      slideIndex = total_slides.length - 1;
    }
    showSlide(slideIndex);
  });

  $(".next-btn").click(function () {
    slideIndex += 1;
    if (slideIndex >= total_slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  });

  $(".dot").click(function () {
    slideIndex = $(this).data("slide");
    showSlide(slideIndex);
  });
});

$(document).ready(function () {
  function slideSetReset(cardImg, cardBody_1, cardBody_2) {
    $(cardImg).click(function () {
      $(cardBody_1).slideDown();
      $(cardBody_2).slideUp();
    });
  }

  function slideSetToggle(cardImg, cardBody) {
    $(cardImg).click(function () {
      $(cardBody).slideToggle();
    });
  }

  slideSetReset('.card-img-1', '.card-body-1', '.card-body-2');
  slideSetReset('.card-img-2', '.card-body-2', '.card-body-1');
  slideSetReset('.card-img-3', '.card-body-3', '.card-body-4');
  slideSetReset('.card-img-4', '.card-body-4', '.card-body-3');

  slideSetToggle('.card-img-5', '.card-body-5');
  slideSetToggle('.card-img-6', '.card-body-6');
});

$(document).ready(function () {
  let lastScrollTop = 0;
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
      $("#animate_horizontally").stop(true).animate({ opacity: '1.0' }, "slow");
      $(".right-content").stop(true).animate({right: '20px', opacity: 1}, "slow");
      $(".left-content").stop(true).animate({left: '20px', opacity: 1}, "slow");
    } else {
      $(".left-content").stop(true).animate({left: '-20px', opacity: 0.2}, "slow");
      $(".right-content").stop(true).animate({right: '-20px', opacity: 0.2}, "slow");
      $("#animate_horizontally").stop(true).animate({ opacity: '0.05' }, "slow");
    }
    lastScrollTop = scrollTop;
  }); 
});

$(document).ready(function () {
  let lastScrollTop = 0;
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop) {
      $("#animate_vertically").stop(true).animate({ opacity: '1.0' }, "slow");
      $(".bottom-content").stop(true).animate({bottom: '20px', opacity: 1}, "slow");
      $(".top-content").stop(true).animate({top: '20px', opacity: 1}, "slow");
    } else {
      $(".bottom-content").stop(true).animate({bottom: '-20px', opacity: 0.2}, "slow");
      $(".top-content").stop(true).animate({top: '-20px', opacity: 0.2}, "slow");
      $("#animate_vertically").stop(true).animate({ opacity: '0.05' }, "slow");
    }
    lastScrollTop = scrollTop;
  });
});
