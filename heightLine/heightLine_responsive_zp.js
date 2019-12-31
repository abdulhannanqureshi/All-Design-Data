
jQuery(document).ready(function($) {
	$(window).load(function(){
		if($('.visible-ts').css('display') == 'none') {
			if($('.heightLine').length > 0)
				heightLine();
		}
	});
	$(window).resize(function (event) {
		if($('.visible-ts').css('display') == 'none') {
			if($('.heightLine').length > 0)
				heightLine();
		}else{
			if($('.heightLine').length > 0)
				$('.heightLine').find('.hlg').height("auto");
		}
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
