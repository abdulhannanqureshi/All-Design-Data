$(function(){
	var target = $("input[type=text]");
	var val = target.attr("title");
	var reg = /^\s*$/;
	target.val(val);
	target.focus(function(){
		if($(this).val() == val ){
			$(this).val("");
		}
	});
	target.blur(function(){
		if(reg.test($(this).val())){
			$(this).val(val);
		}
	});
});