!function(a){"use strict";a.fn.fusion_scroll_to_anchor_target=function(){var b,c,d,e,f,g,h=a(this).attr("href"),i=h.substr(h.indexOf("#")).slice(1),j=a("#"+i);if(j.length&&""!==i)return b="function"==typeof getAdminbarHeight?getAdminbarHeight():0,c="function"==typeof getStickyHeaderHeight?getStickyHeaderHeight():0,d=a(document).scrollTop(),e=j.offset().top-b-c,f=Math.abs(d-e)/2,g=d>e?d-f:d+f,a("html, body").animate({scrollTop:g},{duration:400,easing:"easeInExpo",complete:function(){b="function"==typeof getAdminbarHeight?getAdminbarHeight():0,c="function"==typeof getStickyHeaderHeight?getStickyHeaderHeight():0,e=j.offset().top-b-c,a("html, body").animate({scrollTop:e},450,"easeOutExpo",function(){location.hash&&"#_"===location.hash.substring(0,2)&&"history"in window&&"pushState"in history&&history.pushState("",window.location.href.replace("#_","#"),window.location.href.replace("#_","#"))})}}),j.hasClass("tab-link")&&"function"==typeof a.fn.fusionSwitchTabOnLinkClick&&a(".fusion-tabs").fusionSwitchTabOnLinkClick(),!1}}(jQuery),jQuery(document).ready(function(a){jQuery('.fusion-menu a:not([href="#"], .fusion-megamenu-widgets-container a, .search-link), .fusion-mobile-nav-item a:not([href="#"], .search-link), .fusion-button:not([href="#"], input, button), .fusion-one-page-text-link:not([href="#"])').click(function(a){var b,c,d,e,f,g,h,i;if(jQuery(this).hasClass("avada-noscroll")||jQuery(this).parent().hasClass("avada-noscroll"))return!0;if(this.hash){if(b=window.location.href.split("#"),"/"===b[0].charAt(b[0].length-1)?b[0]:b[0]+"/",i=jQuery(this).attr("target")?jQuery(this).attr("target"):"_self",c=jQuery(this).attr("href"),d=c.split("#"),e=void 0!==d[1]?d[1]:"",f=e.substring(0,1),g=d[0],h=g.substring(g.length-1,g.length),"/"!==h&&(g+="/"),"!"===f||"/"===f)return;a.preventDefault(),location.pathname.replace(/^\//,"")!=this.pathname.replace(/^\//,"")&&"#"!==c.charAt(0)||""!==location.search&&-1===location.search.indexOf("lang=")?("/"===g&&""!==location.search&&(g=location.href.replace(location.search,"")),window.open(g+"#_"+e,i)):(jQuery(this).fusion_scroll_to_anchor_target(),"history"in window&&"pushState"in history&&history.pushState("",c,c),jQuery(this).parents(".fusion-flyout-menu").length&&jQuery(".fusion-flyout-menu-toggle").trigger("click"))}})}),location.hash&&"#_"===location.hash.substring(0,2)&&(jQuery(".fusion-page-load-link").attr("href","#"+location.hash.substring(2)),jQuery(window).load(function(){jQuery(".fusion-blog-shortcode").length?setTimeout(function(){jQuery(".fusion-page-load-link").fusion_scroll_to_anchor_target()},300):jQuery(".fusion-page-load-link").fusion_scroll_to_anchor_target()}));