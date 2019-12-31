$(function(){
	$(':checkbox').on('click',function(){
		if(!$(this).attr('checked') ){
			$(this).prev().addClass('on');
			$(this).attr('checked',true);
		}else{
			$(this).prev().removeClass('on');
			$(this).attr('checked',false);
		}
	});
});