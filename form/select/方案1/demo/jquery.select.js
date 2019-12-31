$(function(){
	$('select').on('change',function(){
		var val = $(this).find('option:selected').text();
		$(this).prev().html(val);
	});
});