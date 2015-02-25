define(["./core","./var/slice","./callbacks"],function(e,n){return e.extend({Deferred:function(n){var r=[["resolve","done",e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory")]],t="pending",i={state:function(){return t},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var n=arguments;return e.Deferred(function(t){e.each(r,function(r,s){var a=e.isFunction(n[r])&&n[r];o[s[1]](function(){var n=a&&a.apply(this,arguments);n&&e.isFunction(n.promise)?n.promise().done(t.resolve).fail(t.reject).progress(t.notify):t[s[0]+"With"](this===i?t.promise():this,a?[n]:arguments)})}),n=null}).promise()},promise:function(n){return null!=n?e.extend(n,i):i}},o={};return i.pipe=i.then,e.each(r,function(e,n){var s=n[2],a=n[3];i[n[1]]=s.add,a&&s.add(function(){t=a},r[1^e][2].disable,r[2][2].lock),o[n[0]]=function(){return o[n[0]+"With"](this===o?i:this,arguments),this},o[n[0]+"With"]=s.fireWith}),i.promise(o),n&&n.call(o,o),o},when:function(r){var t=0,i=n.call(arguments),o=i.length,s=1!==o||r&&e.isFunction(r.promise)?o:0,a=1===s?r:e.Deferred(),u=function(e,r,t){return function(i){r[e]=this,t[e]=arguments.length>1?n.call(arguments):i,t===c?a.notifyWith(r,t):--s||a.resolveWith(r,t)}},c,l,f;if(o>1)for(c=new Array(o),l=new Array(o),f=new Array(o);o>t;t++)i[t]&&e.isFunction(i[t].promise)?i[t].promise().done(u(t,f,i)).fail(a.reject).progress(u(t,l,c)):--s;return s||a.resolveWith(f,i),a.promise()}}),e});