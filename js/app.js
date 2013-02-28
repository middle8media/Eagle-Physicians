
// yellow highlight on h3 background when hovered
$(function() {
    $('.folder-abt, .folder-drs, .folder-loc, .folder-nws, .folder-dia, .folder-log, .folder-egl').hover(function() {
        var index = $(this).index();
        var elem = $('span').get(index);
        $(elem).addClass('h3-hover');
    }, function() {
        $('.h3-hover').removeClass('h3-hover');
    });
});


//folder-out audio on .mouseover
$('.folder-group a')
  .each(function(i) {
    if (i != 0) {
      $('#folder-out')
        .clone()
        .attr('id', 'folder-out' + i)
        .appendTo($(this).parent());
    }
    $(this).data('folder-out', i);
  })
  .mouseover(function() {
    $('#folder-out' + $(this).data('folder-out'))[0].play();
  });
$('#folder-out').attr('id', 'folder-out0');


//folder-in audio on .mouseout
$('.folder-group a')
  .each(function(i) {
    if (i != 0) {
      $('#folder-in')
        .clone()
        .attr('id', 'folder-in' + i)
        .appendTo($(this).parent());
    }
    $(this).data('folder-in', i);
  })
  .mouseout(function() {
    $('#folder-in' + $(this).data('folder-in'))[0].play();
  });
$('#folder-in').attr('id', 'folder-in0');


//folder-in audio on .click
$('.folder-group a')
  .each(function(i) {
    if (i != 0) {
      $('#folder-in')
        .clone()
        .attr('id', 'folder-in' + i)
        .appendTo($(this).parent());
    }
    $(this).data('folder-in', i);
  })
  .click(function() {
    $('#folder-in' + $(this).data('folder-in'))[0].play();
  });
$('#folder-in').attr('id', 'folder-in0');


//folder open to URL animation

$(document).ready(function() {
$('body').fadeIn(1000);

  $('.folder-group a').click(function(event) {
    event.preventDefault(event);
    newLocation = this.href;
    that = $(this);

      $(this).parent().animate({left: '300px'}, 200)

      setTimeout(function() {
        that.parent().addClass('zoom');
        $('.left-folder').animate({opacity: 0}, 1000)
      }, 1000);

      setTimeout(function() {
        $('body').fadeOut(500, newpage);
      }, 2000);

      function newpage() {
      window.location = newLocation;
      };

  });
});
