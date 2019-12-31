$(document).ready(function() {
	$(window).scroll(function(){
		scroll_menu();
	});
	function scroll_menu(){
		var scrollTop	= parseInt($(document).scrollTop());
		if(scrollTop > 150) {
			$('.pageTop').fadeIn();
		} else {
			$('.pageTop').fadeOut();
		}
	}
	$('.pageTop a').click(function(){
		$('html,body').animate({scrollTop: 0}, 'slow','swing');
		return false;
	});
});