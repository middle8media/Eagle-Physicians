// less than or equal to ie8
// yellow highlight on h3 background when hovered
$(function(){$(".folder-abt, .folder-drs, .folder-loc, .folder-nws, .folder-dia, .folder-log, .folder-egl").hover(function(){var e=$(this).index(),t=$("span").get(e);$(t).addClass("h3-hover")},function(){$(".h3-hover").removeClass("h3-hover")})});