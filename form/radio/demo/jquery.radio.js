$(function(){
	$(':radio').on('click',function(){
		if(!$(this).attr('checked')){
			$(this).parents('.radioBox').find('span').removeClass('on');
			$(this).parents('.radioBox').find('input').attr('checked',false);
			$(this).prev().addClass('on');
			$(this).attr('checked',true);
		}
	});
});