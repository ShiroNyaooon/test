$(function(){

	// 画面アンロード時
	$(window).on('beforeunload', function() {
		$(window).scrollTop(0,0);
	});
	
	// 画面ロード後
	$(window).on('load', function() {
		OpacityAnimation();
	});
	
	// 画面スクロールイベント時
	$(window).scroll(function() {
		OpacityAnimation();
	});
});


// 画面スクロールや画面リサイズ時に呼び出すと
// 画面の高さを取得して、
// 指定した項目が画面内に入れば、
// 画像の読み込み＋フワッって表示します
// お試し版なので、単純な動きです。
function OpacityAnimation() {
	
	let scrollY1 = $(window).scrollTop();
	let scrollY2 = $(window).height() + scrollY1;
	
	$("img").each(function(i) {
		
		let objY1 = $(this).offset().top;
		let objY2 = $(this).height() + objY1;
		
		if( scrollY1 <= objY2 && objY1 <= scrollY2) {
			if ( $(this).css("opacity") !== "1" ) {
				$(this).attr('src', $(this).data('src'));
				$(this).animate({"opacity":"1"});
			}
		}
	});
}