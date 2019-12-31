$(function() {
	
	// load後 処理
	$(window).load(function (){
		
		var kvAreaHeight;
		var contentsHeight = $('#main').height();
		var windowTop;
		var kvAreaTop;
		var KVstopPos;
		
		// 左:kvAreaと右:コンテンツ部分の高さ合わせ
		$('#side').css({'height':contentsHeight + 'px'});
		
		
		
		// KV画像の位置 処理
		function kvPosAct (){
			kvAreaHeight = $('#side #sidebar').height();
			kvAreaTop = $('#side').offset().top;
			KVstopPos = kvAreaTop + contentsHeight - kvAreaHeight;
			if (windowTop > kvAreaTop) {
				if (windowTop < KVstopPos) {
					$('#side').removeClass('bottom');
					$('#side #sidebar').css({'position' : 'fixed', 'top' : '0'});
				}  else {
					$('#side').addClass('bottom');
					$('#side #sidebar').css({'position' : 'relative', 'top' : contentsHeight - kvAreaHeight + 'px'});
				}
			} else {
				$('#side #sidebar').css({'position' : 'relative', 'top' : '0'});
			}
			
			if ($('#side').hasClass('.bottom')) {
				$('#side #sidebar').css({'position': 'relative'});
			}
			return this;
		}
		
		// resize後 処理
		$(window).resize(function(){
			// KV画像の位置 実行
			kvPosAct();
		});
		
		// scroll後 処理
		$(window).scroll(function (){
			// windowのスクロール位置 取得
			windowTop = $(window).scrollTop();
			// KV画像の位置 実行
			kvPosAct();
			
		});
		
	});
	
	

});