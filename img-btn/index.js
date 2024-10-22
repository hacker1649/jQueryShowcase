$(document).ready(function () {
  function zoomSetReset(imgClass, btnClass) {
    let isImageZoomed = false;
    $(imgClass).click(function () {
      if(isImageZoomed == false) {
        $(imgClass).css({width: '550px', height: '400px'});
        $(btnClass).show();
        isImageZoomed = true;
      }
    });
    $(btnClass).click(function () {
      if(isImageZoomed == true) {
        $(imgClass).css({width: '416px', height: '277px'});
        $(btnClass).hide();
        isImageZoomed = false;
      }
    });
  }

  zoomSetReset('.img-1', '.reset-btn-1');
  zoomSetReset('.img-2', '.reset-btn-2');
  zoomSetReset('.img-3', '.reset-btn-3');
});
