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
