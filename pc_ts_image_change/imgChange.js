$(function() {
	
	$(window).resize(function (event) {
		switchImage($('.visibleTS').css('display') == 'block');
	});
	switchImage($('.visibleTS').css('display') == 'block');
	function switchImage(isVisible_header) {
		$('img').each(function (index) {
			var pc = $(this).attr('src').replace('_ts.', '_pc.');
			var ts = $(this).attr('src').replace('_pc.', '_ts.');
			if (!isVisible_header) {
				$(this).attr("src",pc);
			}else {
				
				$(this).attr("src",ts);
			}
		});
	}
});