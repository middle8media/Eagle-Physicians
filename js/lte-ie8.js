// less than or equal to ie8

// yellow highlight on h3 background when hovered
$(function() {
    $('.folder-abt, .folder-drs, .folder-loc, .folder-nws, .folder-dia, .folder-log, .folder-egl').hover(function() {
        var index = $(this).index();
        var elem = $('h3').get(index);
        $(elem).addClass('h3-hover');
    }, function() {
        $('.h3-hover').removeClass('h3-hover');
    });
});


//folder zoom to URL animation

// $(document).ready(function() {
// $('body').fadeIn(1000);

//   $('.folder-group a').click(function(event) {
//     event.preventDefault(event);
//     newLocation = this.href;
//     that = $(this);

//       $(this).parent().animate({left: '300px'}, 200)

//       setTimeout(function() {
//         that.parent().addClass('zoom');
//         $('.left-folder').animate({opacity: 0}, 1000)
//       }, 1000);

//       setTimeout(function() {
//         $('body').fadeOut(500, newpage);
//       }, 2000);

//       function newpage() {
//       window.location = newLocation;
//       };

//   });
// });
