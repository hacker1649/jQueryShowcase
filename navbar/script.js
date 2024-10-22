$(document).ready(function () {
  function hoverFunc(dropdownID){
    $(dropdownID).hover(function(){
      $(this).find('.dropdown-menu').css('display','block');
    },
    function(){
      $(this).find('.dropdown-menu').css('display','none');
    });
  }

  hoverFunc('#about');
  hoverFunc('#publications');
  hoverFunc('#publish_with_us');
  hoverFunc('#marketing_opportunities');
  hoverFunc('#articles_by_disease');
  hoverFunc('#for_librarians');
  hoverFunc('#for_authors_and_editors');
  hoverFunc('#more');
});