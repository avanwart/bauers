define(["./core","./var/strundefined","./core/access","./css/var/rnumnonpx","./css/curCSS","./css/addGetHookIf","./css/support","./core/init","./css","./selector"],function(t,e,o,n,s,f,i){function c(e){return t.isWindow(e)?e:9===e.nodeType&&e.defaultView}var r=window.document.documentElement;return t.offset={setOffset:function(e,o,n){var s,f,i,c,r,l,a,u=t.css(e,"position"),p=t(e),d={};"static"===u&&(e.style.position="relative"),r=p.offset(),i=t.css(e,"top"),l=t.css(e,"left"),a=("absolute"===u||"fixed"===u)&&(i+l).indexOf("auto")>-1,a?(s=p.position(),c=s.top,f=s.left):(c=parseFloat(i)||0,f=parseFloat(l)||0),t.isFunction(o)&&(o=o.call(e,n,r)),null!=o.top&&(d.top=o.top-r.top+c),null!=o.left&&(d.left=o.left-r.left+f),"using"in o?o.using.call(e,d):p.css(d)}},t.fn.extend({offset:function(o){if(arguments.length)return void 0===o?this:this.each(function(e){t.offset.setOffset(this,o,e)});var n,s,f=this[0],i={top:0,left:0},r=f&&f.ownerDocument;if(r)return n=r.documentElement,t.contains(n,f)?(typeof f.getBoundingClientRect!==e&&(i=f.getBoundingClientRect()),s=c(r),{top:i.top+s.pageYOffset-n.clientTop,left:i.left+s.pageXOffset-n.clientLeft}):i},position:function(){if(this[0]){var e,o,n=this[0],s={top:0,left:0};return"fixed"===t.css(n,"position")?o=n.getBoundingClientRect():(e=this.offsetParent(),o=this.offset(),t.nodeName(e[0],"html")||(s=e.offset()),s.top+=t.css(e[0],"borderTopWidth",!0),s.left+=t.css(e[0],"borderLeftWidth",!0)),{top:o.top-s.top-t.css(n,"marginTop",!0),left:o.left-s.left-t.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||r;e&&!t.nodeName(e,"html")&&"static"===t.css(e,"position");)e=e.offsetParent;return e||r})}}),t.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var s="pageYOffset"===n;t.fn[e]=function(t){return o(this,function(t,e,o){var f=c(t);return void 0===o?f?f[n]:t[e]:void(f?f.scrollTo(s?window.pageXOffset:o,s?o:window.pageYOffset):t[e]=o)},e,t,arguments.length,null)}}),t.each(["top","left"],function(e,o){t.cssHooks[o]=f(i.pixelPosition,function(e,f){return f?(f=s(e,o),n.test(f)?t(e).position()[o]+"px":f):void 0})}),t});