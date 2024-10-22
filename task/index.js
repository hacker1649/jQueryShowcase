$(document).ready(function() {
  function btnToggle(btn, val1, val2) {
    $(btn).click(function() {
      if ($(this).text() === "On") {
        $(this).text("Off");
        $(val1).show();
        $(val2).show();
      } else {
        $(this).text("On");
        $(val1).hide();
        $(val2).hide();
      }
    });
  }

  btnToggle('.on-btn', '.3', '.7');
  
  btnToggle('.off-btn', '.3', '.5');
});