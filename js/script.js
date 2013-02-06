$(function(){
    $('.folder-abt, .folder-drs, .folder-loc, .folder-nws, .folder-dia, .folder-log, .folder-egl').hover(function(){
        var index = $(this).index();
        var elem = $('h3').get(index);
        $(elem).addClass('h3-hover');   
    }, function(){
        $('.h3-hover').removeClass('h3-hover');
    });
});
