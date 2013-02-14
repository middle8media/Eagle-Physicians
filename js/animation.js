//Cross Browser CSS Transition Support

$(function(){
// abt folder
  $('.folder-abt')
    .mouseover(function () {
        $(this).stop().animate({left: "-241px"}, 600);
    })
    $('.folder-abt')
    .mouseout(function () {
        $(this).stop().animate({left: "-265px"}, 600);
    })

// drs folder
  $('.folder-drs')
    .mouseover(function () {
        $(this).stop().animate({left: "-172px"}, 600);
    })
    $('.folder-drs')
    .mouseout(function () {
        $(this).stop().animate({left: "-192px"}, 600);
    })

// loc folder
  $('.folder-loc')
    .mouseover(function () {
        $(this).stop().animate({left: "-106px"}, 600);
    })
    $('.folder-loc')
    .mouseout(function () {
        $(this).stop().animate({left: "-125px"}, 600);
    })

// nws folder
  $('.folder-nws')
    .mouseover(function () {
        $(this).stop().animate({left: "-41px"}, 600);
    })
    $('.folder-nws')
    .mouseout(function () {
        $(this).stop().animate({left: "-60px"}, 600);
    })

// dia folder
  $('.folder-dia')
    .mouseover(function () {
        $(this).stop().animate({left: "25px"}, 600);
    })
    $('.folder-dia')
    .mouseout(function () {
        $(this).stop().animate({left: "3px"}, 600);
    })

// log folder
  $('.folder-log')
    .mouseover(function () {
        $(this).stop().animate({left: "85px"}, 600);
    })
    $('.folder-log')
    .mouseout(function () {
        $(this).stop().animate({left: "63px"}, 600);
    })

// egl folder
  $('.folder-egl')
    .mouseover(function () {
        $(this).stop().animate({left: "152px"}, 600);
    })
    $('.folder-egl')
    .mouseout(function () {
        $(this).stop().animate({left: "130px"}, 600);
    })

});
