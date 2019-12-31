/**
 * common.js
 *
 *  version --- 3.6
 *  updated --- 2011/09/06
 */



/* !isUA -------------------------------------------------------------------- */
var isUA = (function(){
	var ua = navigator.userAgent.toLowerCase();
	indexOfKey = function(key){ return (ua.indexOf(key) != -1)? true: false;}
	var o = {};
	o.ie      = function(){ return indexOfKey("msie"); }
	o.fx      = function(){ return indexOfKey("firefox"); }
	o.chrome  = function(){ return indexOfKey("chrome"); }
	o.opera   = function(){ return indexOfKey("opera"); }
	o.android = function(){ return indexOfKey("android"); }
	o.ipad    = function(){ return indexOfKey("ipad"); }
	o.ipod    = function(){ return indexOfKey("ipod"); }
	o.iphone  = function(){ return indexOfKey("iphone"); }
	return o;
})();
/* !init Smart Devices ------------------------------------------------------ */
(function (){
	var parentNode = document.getElementsByTagName('head')[0];
	var viewport = {
		withzoom:'width=devise-width,minimum-scale=1.0,maximum-scale=1.0',
		android : 'width=devise-width, initial-scale=1.0',
		ipad   : 'width=1024,minimum-scale=1.0,maximum-scale=1.0',
		iphone  : 'width=devise-width, initial-scale=1.0'
	}
	meta = document.createElement('meta');
	meta.setAttribute('name','viewport');

	if( isUA.android() ){
		meta.setAttribute('content',viewport.android);
		parentNode.appendChild(meta);
	}else if( isUA.ipad() ){
		if (window.orientation == 90 || window.orientation == -90) {
			meta.setAttribute('content',viewport.ipad);
		}else if (window.orientation == 0 || window.orientation == 180) {
			meta.setAttribute('content',viewport.withzoom);
		}
		parentNode.appendChild(meta);
	}else if( isUA.ipod() || isUA.iphone() ){
		meta.setAttribute('content',viewport.iphone);
		parentNode.appendChild(meta);
		window.addEventListener('load', function(){ setTimeout(scrollTo, 100, 0, 1);}, false);
	}else{
	}
	$(window).bind( 'orientationchange', function(e){
		if( isUA.ipad() ) {
			if (window.orientation == 90 || window.orientation == -90) {
				$('meta[name=viewport]').attr('content',viewport.ipad);
			}else if (window.orientation == 0 || window.orientation == 180) {
				$('meta[name=viewport]').attr('content',viewport.withzoom);
			}
		}
	});
})();
