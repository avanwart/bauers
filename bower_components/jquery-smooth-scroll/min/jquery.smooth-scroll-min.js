!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function($){function t(t){return t.replace(/(:|\.|\/)/g,"\\$1")}var e="1.5.4",l={},o={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},n=function(t){var e=[],l=!1,o=t.dir&&"left"===t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!==document&&this!==window){var t=$(this);t[o]()>0?e.push(this):(t[o](1),l=t[o]()>0,l&&e.push(this),t[o](0))}}),e.length||this.each(function(){"BODY"===this.nodeName&&(e=[this])}),"first"===t.el&&e.length>1&&(e=[e[0]]),e};$.fn.extend({scrollable:function(t){var e=n.call(this,{dir:t});return this.pushStack(e)},firstScrollable:function(t){var e=n.call(this,{el:"first",dir:t});return this.pushStack(e)},smoothScroll:function(e,l){if(e=e||{},"options"===e)return l?this.each(function(){var t=$(this),e=$.extend(t.data("ssOpts")||{},l);$(this).data("ssOpts",e)}):this.first().data("ssOpts");var o=$.extend({},$.fn.smoothScroll.defaults,e),n=$.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var l=this,s=$(this),r=$.extend({},o,s.data("ssOpts")||{}),i=o.exclude,c=r.excludeWithin,a=0,f=0,h=!0,u={},d=location.hostname===l.hostname||!l.hostname,p=r.scrollTarget||$.smoothScroll.filterPath(l.pathname)===n,m=t(l.hash);if(r.scrollTarget||d&&p&&m){for(;h&&a<i.length;)s.is(t(i[a++]))&&(h=!1);for(;h&&f<c.length;)s.closest(c[f++]).length&&(h=!1)}else h=!1;h&&(r.preventDefault&&e.preventDefault(),$.extend(u,r,{scrollTarget:r.scrollTarget||m,link:l}),$.smoothScroll(u))}),this}}),$.smoothScroll=function(t,e){if("options"===t&&"object"==typeof e)return $.extend(l,e);var o,n,s,r,i,c=0,a="offset",f="scrollTop",h={},u={};"number"==typeof t?(o=$.extend({link:null},$.fn.smoothScroll.defaults,l),s=t):(o=$.extend({link:null},$.fn.smoothScroll.defaults,t||{},l),o.scrollElement&&(a="position","static"===o.scrollElement.css("position")&&o.scrollElement.css("position","relative"))),f="left"===o.direction?"scrollLeft":f,o.scrollElement?(n=o.scrollElement,/^(?:HTML|BODY)$/.test(n[0].nodeName)||(c=n[f]())):n=$("html, body").firstScrollable(o.direction),o.beforeScroll.call(n,o),s="number"==typeof t?t:e||$(o.scrollTarget)[a]()&&$(o.scrollTarget)[a]()[o.direction]||0,h[f]=s+c+o.offset,r=o.speed,"auto"===r&&(i=h[f]-n.scrollTop(),0>i&&(i*=-1),r=i/o.autoCoefficient),u={duration:r,easing:o.easing,complete:function(){o.afterScroll.call(o.link,o)}},o.step&&(u.step=o.step),n.length?n.stop().animate(h,u):o.afterScroll.call(o.link,o)},$.smoothScroll.version=e,$.smoothScroll.filterPath=function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},$.fn.smoothScroll.defaults=o});