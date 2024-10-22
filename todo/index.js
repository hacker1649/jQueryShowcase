$(document).ready(function(){
  $(".hide").click(function(){
    $(this).parents("tr").hide();
  });
  $(".restore").click(function(){
    $("tr").show();
  });
});