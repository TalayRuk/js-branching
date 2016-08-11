$(document).ready(function(){
  var over18 = confirm("Are you over 18; Click ok for YES, cancel for NO");
    if (over18) {
      $(".olderthan18").show();
    } else {
      $(".notquite18").show();
  }

  var candidates = $("input:radio[name=candidates]:checked").val();

  var vote = $("#ifyoucanvote").val();







});
