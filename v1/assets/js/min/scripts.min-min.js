!function(e){"use strict";jQuery(document).ready(function(){function o(){e("#draw").lazylinepainter({svgData:a,strokeWidth:2,strokeColor:"#FFFFFF",drawSequential:!1,reverse:!0,responsive:!0,delay:1e3,onComplete:function(){setTimeout(function(){e("#draw svg path").fadeIn(800).css({"fill-opacity":1,fill:"#fff","-webkit-transition":"fill-opacity 1.5s ease","-moz-transition":"fill-opacity 1.5s ease","-o-transition":"fill-opacity 1.5s ease",transition:"fill-opacity 1.5s ease"})},250)}}),e("#draw").lazylinepainter("paint")}function t(){s.height(e(window).height())}function i(){e(".fade-out").fadeIn(8e3).css({"background-color":"transparent","-webkit-transition":"background-color 0.9s ease","-moz-transition":"background-color 0.9s ease","-o-transition":"background-color 0.9s ease",transition:"background-color 0.9s ease"})}function r(e){var o=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;return o.test(e)?!0:!1}var n={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return n.Android()||n.BlackBerry()||n.iOS()||n.Opera()||n.Windows()}},a={draw:{strokepath:[{path:"M586.6,160.6c-0.8-1.6-4.9-8.4-13.4-5.9  c-26.7,6.8-34.8,10.3-58.3,19.2c-9.2,3.5-20.7,9.8-29,14.2c-66.6,35.5-114.1,83.1-126.7,97.4c10.1-18.6,34.1-64.4,49.5-85.4  c1.2-1.9,5.5-6.6,2.3-12.9c-1.6-2.6-1.8-4.1-7.7-3.9c-18.2,3.4-83,27.8-83,27.8s51.5-178.3,53.5-186.6c2.1-9.5-6.9-14.5-8.8-15.4  c-7.9-3.2-14.9,1.4-17.8,7.8c0,0-50.3,179-58.3,205c-13,4.6-17.2,6.2-28.2,10.2c-5.7,2-16.7,5.3-19.2,6.4c-8,3.5-10.3,10.4-9.3,15.8  c1.2,6.4,9.2,12.4,16.5,10.7c3.1-0.6,30.4-10.4,30.4-10.4c-3,12.2-79.7,271.4-79.7,271.4c-1.4,7.6,3,13.9,8.8,16  c6.3,2.3,15.3-0.6,18-8.8c0,0,41.7-162.2,84.4-290.4c0,0,54.9-20.1,55-20.1c-11.4,18.9-21.5,39.1-30.9,60.6  c-5.7,12.8-8.6,18.4-13.1,34.8c-1.3,6.4,1.1,11.9,5.9,15.1c6.5,4.2,13,1.5,15.8-0.5c10.1-9.3,13.8-15.7,22.6-24.8  c2.4-2.5,49.8-59.8,136.3-102.8c25-12.5,49.7-22.3,77.3-29.2C588.2,173.1,588.7,164.8,586.6,160.6z",duration:2250},{path:"M218,249.7c-6.8-1.9-15,1.7-16.8,7.4l-35.7,120.1  c-1.4,7.9,3.9,13.2,8.3,15.2c4.2,1.7,14.2,2.2,18.2-7.7l35.6-119.6C228.9,259.9,224.9,251.6,218,249.7z",duration:2250},{path:"M186.7,271c-4.2-5.7-9.9-7.6-15.1-6.3l-31.2,10.3  l33.5-112.6c1.1-5.1-1.1-9.6-4.3-12.6c-4.1-3.6-9.3-4.8-14.7-2.9c-7.4,2.6-138.3,48.2-138.3,48.2c-5.3,1.9-8.9,6.9-8.9,12.7  c0,7.6,6.2,13.7,13.9,13.7c1.5,0,3.1-0.3,4.2-0.6c6.6-1.7,113.9-40.7,113.9-40.7l-30.8,106L58.9,303c-7.1,2.5-10.3,11.2-8,17.2  c3.8,9.6,12.7,9.8,16.9,8.7l30.4-10L66.4,424.6c-2.3,9.6,5.3,15,8,16c10.4,3.8,17.3-3.9,18.8-8.9l36.8-124.4l51.4-17.3  C181.4,290,193.4,283.8,186.7,271z",duration:2250}],dimensions:{width:595,height:555}}};o();var s=e("#home");e(window).resize("resizeBackground"),t(),setTimeout(i,5250),jQuery("#preloader").fadeOut(300),jQuery(window).load(function(){if(window.location.hash){var e=window.location.hash;jQuery("html, body").animate({scrollTop:jQuery(e).offset().top-l-50})}});var u,c=jQuery(window).scrollTop(),l=jQuery("#main-menu").height();u=jQuery("body.blog, body.portfolio").length>0?.3:.8,c>u*jQuery(window).height()?jQuery("#main-menu.effect-on").addClass("menu-visible"):jQuery("#main-menu.effect-on").removeClass("menu-visible"),jQuery(window).scroll(function(){c=e(window).scrollTop(),c>u*jQuery(window).height()?jQuery("#main-menu.effect-on").addClass("menu-visible"):jQuery("#main-menu.effect-on").removeClass("menu-visible")}),jQuery("#main-menu").localScroll({offset:{top:-l},duration:1e3}),jQuery("#side-menu").localScroll(),e.currentItem(),jQuery(window).scroll(function(){e.currentItem()}),jQuery(".sticky").sticky({topSpacing:0}),jQuery("#mobile-button").click(function(){"none"==jQuery("#mobile-menu .menu-container").css("display")?(jQuery("#mobile-menu .menu-container").slideDown(300),jQuery("#logo").fadeOut(500)):(jQuery("#mobile-menu .menu-container").slideUp(300),jQuery("#logo").fadeIn(300))}),jQuery("#mobile-menu a").click(function(){var e=jQuery(this).parent();0==jQuery("> .sub-menu",e).length&&jQuery("#mobile-menu .menu-container").slideUp(300)}),jQuery("#main-menu .desktop-menu .menu-container li").hover(function(){jQuery("> .sub-menu",this).stop().show()},function(){jQuery("> .sub-menu",this).stop().hide()}),jQuery("#mobile-menu li").each(function(){jQuery(".sub-menu",this).length>0&&jQuery(this).append('<i class="fa fa-angle-down"></i>')}),jQuery("#mobile-menu li a").click(function(){var e=jQuery(this).parent();return"#"==jQuery(this).attr("href")?jQuery("> .sub-menu",e).length>0&&"none"==jQuery("> .sub-menu",e).css("display")?(jQuery("> .sub-menu",e).slideDown(300),!1):jQuery("> .sub-menu",e).length>0&&"block"==jQuery("> .sub-menu",e).css("display")?(jQuery("> .sub-menu",e).slideUp(300),!1):!1:void 0}),n.any()||jQuery(".parallax").length&&jQuery(".parallax").each(function(){jQuery(this).parallax("50%","0.1")}),jQuery("[data-animate]").appear(function(){var e=jQuery(this).data("animate");n.any()||(jQuery(this).addClass("animated"),jQuery(this).addClass(e))});var y,d=jQuery("#portfolio-items");y=d.parent().hasClass("portfolio-type-3")?"fitRows":"masonry",d.isotope({itemSelector:".item",transitionDuration:"1s",layoutMode:y}),jQuery(window).load(function(){d.isotope("layout")}),d.isotope("layout"),jQuery("#portfolio-container nav li a").click(function(){jQuery("#portfolio-container nav li").removeClass("current-category");var e=jQuery(this).attr("data-filter");return d.isotope({filter:e}),jQuery(this).parent().addClass("current-category"),!1});var f;jQuery(".portfolio-type-1 .item, .portfolio-type-4 .item").hover(function(){n.any()||(f=parseInt(jQuery(".portfolio-info",this).css("height"),10),jQuery(".portfolio-info",this).css({bottom:-f,visibility:"visible"}),jQuery(".portfolio-info",this).css("bottom",0),jQuery("img",this).css({top:-(f/2)}))},function(){n.any()||(jQuery("img",this).css({top:0}),jQuery(".portfolio-info",this).css("bottom",-f))}),jQuery(window).on("debouncedresize",function(){d.isotope("layout"),jQuery(".portfolio-info").css({visibility:"hidden"})});var p;e(".portfolio-type-1 #portfolio-items a, #portfolio-nav .navigate").on("tap click",function(){return p=jQuery(this).attr("href"),jQuery("#portfolio-content").css({opacity:0,visibility:"hidden"}),jQuery("#portfolio-display").css({display:"block"}),jQuery("html, body").animate({scrollTop:e("#portfolio-container").offset().top-l-50},{complete:function(){jQuery("#portfolio-loader").stop().fadeIn(300,function(){e.ajax({url:p,success:function(e){jQuery("#portfolio-content").html(e),jQuery("#portfolio-loader").delay(1e3).stop().fadeOut(300,function(){jQuery("#portfolio-content").css({visibility:"visible",opacity:1})})}})})}}),!1}),jQuery(document).on("click",".portfolio-type-1 #portfolio-items a, #portfolio-nav .navigate",function(){return p=jQuery(this).attr("href"),jQuery("#portfolio-content").css({opacity:0,visibility:"hidden"}),jQuery("#portfolio-display").css({display:"block"}),jQuery("html, body").animate({scrollTop:e("#portfolio-container").offset().top-l-50},{complete:function(){jQuery("#portfolio-loader").stop().fadeIn(300,function(){e.ajax({url:p,success:function(e){jQuery("#portfolio-content").html(e),jQuery("#portfolio-loader").delay(1e3).stop().fadeOut(300,function(){jQuery("#portfolio-content").css({visibility:"visible",opacity:1})})}})})}}),!1}),jQuery(document).on("click touchstart","#close-portfolio",function(){return jQuery("#portfolio-display").slideUp(1e3),!1});var m,j=jQuery('input[name="personal"]'),Q=jQuery('input[name="email"]'),h=jQuery('input[name="subject"]'),b=jQuery('textarea[name="message"]');jQuery(".contact-ajax").length>0&&jQuery(".contact-ajax")[0].reset(),jQuery(".contact-ajax").submit(function(){m=0;var o=jQuery(this).serialize();return""==j.val()?(j.addClass("error"),m++):j.removeClass("error"),""!=Q.val()&&r(Q.val())?Q.removeClass("error"):(Q.addClass("error"),m++),""==b.val()?(b.addClass("error"),m++):b.removeClass("error"),""==h.val()?(h.addClass("error"),m++):h.removeClass("error"),0==m&&(jQuery('.contact-ajax button[type="submit"], .contact-ajax input').attr("disabled","disabled"),e.ajax({type:"POST",url:"assets/php/contact_form/",data:o,success:function(o){"success"==o?(e(".contact-ajax > div").slideUp(500),e("#success-message").slideDown(500)):e("#error-message").slideDown(500)}})),!1}),jQuery('a[data-gal="prettyPhoto"]').prettyPhoto({deeplinking:!1}),jQuery(".smooth-scroll").click(function(){var e=jQuery(this).attr("href");return jQuery("html, body").animate({scrollTop:jQuery(e).offset().top-l},1e3),!1})})}(jQuery);
