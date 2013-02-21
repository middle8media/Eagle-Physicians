// yepnope
// ie7 & 8 fallback - CSS Transforms
// ie9 & 10, Chrome, Firefox & Safari load the scripts called in the html file
// lte-ie8-ck.js takes out audio and CSS scale transform, because jquery doesn't support transitioning of CSS scale transform
yepnope({test:Modernizr.csstransforms,nope:["css/ie-transform.css","js/lte-ie8-ck.js"]});yepnope({test:Modernizr.csstransitions,yep:"js/app-ck.js",nope:["js/animation-ck.js","js/lte-ie8-ck.js"]});yepnope("ie9!js/ie9-ck.js");