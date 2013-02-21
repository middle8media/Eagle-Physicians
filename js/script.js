// yepnope

// ie7 & 8 fallback - CSS Transforms
// ie9 & 10, Chrome, Firefox & Safari load the scripts called in the html file
// lte-ie8-ck.js takes out audio and CSS scale transform, because jquery doesn't support transitioning of CSS scale transform
yepnope({
  test: Modernizr.csstransforms,
  // yep: ['css/global.css', 'js/app-ck.js'],
  // nope: ['css/global.css', 'css/ie-transform.css', 'js/lte-ie8-ck.js']
  nope: ['css/ie-transform.css', 'js/lte-ie8-ck.js']
});

//ie7, 8 & 9 fallback - CSS Transitions
//ie10, Chrome, Firefox & Safari load the scripts called in the html file and the yep below
yepnope({
  test: Modernizr.csstransitions,
  // yep: ['css/global.css', 'js/app-ck.js'],
  yep: 'js/app-ck.js',
  nope: ['js/animation-ck.js', 'js/lte-ie8-ck.js']
});

yepnope('ie9!js/ie9-ck.js');

// yepnope('ie7!ie8!css/ie-transform.css');
// yepnope('ie7!ie8!ie9!js/animation-ck.js');
// yepnope('ie7!ie8!ie9!js/lte-ie8.js');  
