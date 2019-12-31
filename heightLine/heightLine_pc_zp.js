
jQuery(document).ready(function($) {
	$(window).load(function(){
		if($('.heightLine').length > 0)
				heightLine();
	});
	function heightLine(){
		$('.heightLine').each(function() {
			var _height = 0;
			$(this).find('.hlg').each(function() {
				if($(this).height() > _height)
					_height = $(this).height()
			});
			$(this).find('.hlg').height(_height);
		});
	}
});
