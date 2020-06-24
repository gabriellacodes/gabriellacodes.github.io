$(function(){
    $(".form-item-button").mousedown(function(){
      $(this).bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
          $(this).removeClass("active");
      })
       $(this).addClass("active");
    });
  });