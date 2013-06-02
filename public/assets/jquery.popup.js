/**
 * popupWin
 * Copyright 2013 Viktor Melnikov
 * Version 1.2 - Updated: May, 8, 2013
 *
 * Example:
 *
 * Link for popup
 * <a href="#" id="example">example</a>
 *
 * Style for popup
 * <link href="popup.css" rel="stylesheet" />
 * .hide {
 *     display : none;
 * }
 *
 * Popup window
 * <div id="popup" class="hide">
 * </div>
 *
 * $('#example').popupWin({
 *     popWin      : '#popup'
 * });
 */
(function(e){e.fn.popupWin=function(t){var n=e.extend({popWin:"#popup",location:"bottom",width:"270px",edgeOffset:3,delay:400,fadeIn:200,fadeOut:200,left_right:{right:0}},t),i=function(e){var t=typeof e,n=0;if("object"!=t||null==e)return 0;for(x in e)n++;return n},a=function(){var t=[];if(e.each(n,function(e,n){"object"==typeof e?0===i(e)?t.push("- Введите значение "+e):null:n||t.push("- Введите значение "+e)}),0!=t.length){var a="";e.each(t,function(e,t){a+=t+"\n"}),alert("В ходе инициализации окна было допущено "+t.length+" ошибки (-ок): \n"+a),exit()}},o=function(t){var i=t.offset().top,a=(t.offset().left,""),o={},r={};r=t.data("popup"),"bottom"==n.location?(i=i+n.edgeOffset+10+"px",a="_bottom"):"top"==n.location?(i="-"+(i+n.edgeOffset+10)+"px",a="_top"):"left"==n.location?(i=i+n.edgeOffset+10+"px",a="_left"):"right"==n.location&&(i=i+n.edgeOffset+10+"px",a="_right"),o=e.extend({width:n.width,top:i},n.left_right),e(n.popWin).addClass("popup"+a),e(n.popWin).css(o),r||t.data("popup",{location:n.location,properties:o})},r=function(t){t.data("popup"),e(n.popWin).toggleClass("hide").css({opacity:0}).animate({top:"-=10",opacity:1},"normal").show()},l=function(t){var i=e(n.popWin),a=t.data("popup");i.animate({top:a.properties.top,opacity:0},"normal",function(){i.toggleClass("hide").hide()})};return this.each(function(){var t=e(this);a(),o(t),t.unbind().bind("click",function(){var t=e(this).closest("li");t.hasClass("active")?t.removeClass("active"):t.addClass("active"),e(n.popWin).hasClass("hide")?r(e(this)):l(e(this))}),e(document).bind("click",function(i){if(0==e(i.target).closest(t.parent()[0]).length){var a=e(n.popWin).closest("li");e(n.popWin).hasClass("hide")||(l(t),a.hasClass("active")?a.removeClass("active"):a.addClass("active"))}})})}})(jQuery);