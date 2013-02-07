$(function(){
    $('.folder-abt, .folder-drs, .folder-loc, .folder-nws, .folder-dia, .folder-log, .folder-egl').hover(function(){
        var index = $(this).index();
        var elem = $('h3').get(index);
        $(elem).addClass('h3-hover');   
    }, function(){
        $('.h3-hover').removeClass('h3-hover');
    });
});

yepnope({  
  test: Modernizr.csstransitions,  
  yep: 'css/global.css',
  nope: 'js/animation-ck.js',
  // complete: function () {  
  //   alert('Everything has completed loading!');  
  // }  
}); 


// yepnope({  
//   test: Modernizr.csstransforms,  
//   yep: '../css/global.css',  
//   nope: ['animation.js'],
//   complete: function () {  
//     alert('Everything has completed loading!');  
//   }  
// }); 
