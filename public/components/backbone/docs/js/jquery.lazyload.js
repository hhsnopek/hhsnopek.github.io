!function(e,t){$window=e(t),e.fn.lazyload=function(n){function r(){var t=0;i.each(function(){var n=e(this);if(!o.skip_invisible||n.is(":visible"))if(e.abovethetop(this,o)||e.leftofbegin(this,o));else if(e.belowthefold(this,o)||e.rightoffold(this,o)){if(++t>o.failure_limit)return!1}else n.trigger("appear")})}var i=this,o={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return n&&(void 0!==n.failurelimit&&(n.failure_limit=n.failurelimit,delete n.failurelimit),void 0!==n.effectspeed&&(n.effect_speed=n.effectspeed,delete n.effectspeed),e.extend(o,n)),$container=void 0===o.container||o.container===t?$window:e(o.container),0===o.event.indexOf("scroll")&&$container.bind(o.event,function(){return r()}),this.each(function(){var t=this,n=e(t);t.loaded=!1,n.one("appear",function(){if(!this.loaded){if(o.appear){var r=i.length;o.appear.call(t,r,o)}e("<img />").bind("load",function(){n.hide().attr("src",n.data(o.data_attribute))[o.effect](o.effect_speed),t.loaded=!0;var r=e.grep(i,function(e){return!e.loaded});if(i=e(r),o.load){var a=i.length;o.load.call(t,a,o)}}).attr("src",n.data(o.data_attribute))}}),0!==o.event.indexOf("scroll")&&n.bind(o.event,function(){t.loaded||n.trigger("appear")})}),$window.bind("resize",function(){r()}),r(),this},e.belowthefold=function(n,r){var i;return i=void 0===r.container||r.container===t?$window.height()+$window.scrollTop():$container.offset().top+$container.height(),i<=e(n).offset().top-r.threshold},e.rightoffold=function(n,r){var i;return i=void 0===r.container||r.container===t?$window.width()+$window.scrollLeft():$container.offset().left+$container.width(),i<=e(n).offset().left-r.threshold},e.abovethetop=function(n,r){var i;return i=void 0===r.container||r.container===t?$window.scrollTop():$container.offset().top,i>=e(n).offset().top+r.threshold+e(n).height()},e.leftofbegin=function(n,r){var i;return i=void 0===r.container||r.container===t?$window.scrollLeft():$container.offset().left,i>=e(n).offset().left+r.threshold+e(n).width()},e.inviewport=function(t,n){return!(e.rightofscreen(t,n)||e.leftofscreen(t,n)||e.belowthefold(t,n)||e.abovethetop(t,n))},e.extend(e.expr[":"],{"below-the-fold":function(n){return e.belowthefold(n,{threshold:0,container:t})},"above-the-top":function(n){return!e.belowthefold(n,{threshold:0,container:t})},"right-of-screen":function(n){return e.rightoffold(n,{threshold:0,container:t})},"left-of-screen":function(n){return!e.rightoffold(n,{threshold:0,container:t})},"in-viewport":function(n){return!e.inviewport(n,{threshold:0,container:t})},"above-the-fold":function(n){return!e.belowthefold(n,{threshold:0,container:t})},"right-of-fold":function(n){return e.rightoffold(n,{threshold:0,container:t})},"left-of-fold":function(n){return!e.rightoffold(n,{threshold:0,container:t})}})}(jQuery,window);