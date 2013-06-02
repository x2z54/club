/*
 * Bootstrap Image Gallery JS Example 2.9
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
$(function(){"use strict";$("#start-slideshow").button().click(function(){var e=$(this).data(),t=$(e.target),n=t.data("modal");n?$.extend(n.options,e):e=$.extend(t.data(),e),t.find(".modal-slideshow").find("i").removeClass("icon-play").addClass("icon-pause"),t.modal(e)}),$("#toggle-fullscreen").button().click(function(){var e=$(this),t=document.documentElement;e.hasClass("active")?($("#modal-gallery").removeClass("modal-fullscreen"),(document.webkitCancelFullScreen||document.mozCancelFullScreen||$.noop).apply(document)):($("#modal-gallery").addClass("modal-fullscreen"),t.webkitRequestFullScreen?t.webkitRequestFullScreen(window.Element.ALLOW_KEYBOARD_INPUT):t.mozRequestFullScreen&&t.mozRequestFullScreen())}),$.ajax({url:"http://api.flickr.com/services/rest/",data:{format:"json",method:"flickr.interestingness.getList",api_key:"7617adae70159d09ba78cfec73c13be3"},dataType:"jsonp",jsonp:"jsoncallback"}).done(function(e){var t,n=$("#gallery");$.each(e.photos.photo,function(e,i){t="http://farm"+i.farm+".static.flickr.com/"+i.server+"/"+i.id+"_"+i.secret,$('<a data-gallery="gallery"/>').append($("<img>").prop("src",t+"_s.jpg")).prop("href",t+"_b.jpg").prop("title",i.title).appendTo(n)})})});