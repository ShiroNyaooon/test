$(function(){
    $('#flexCheck1224').click(function(){
		if ($(this).prop("checked")) {
			// 24時間表示
			$('#timeO1').text("10:00～17:00");
			$('#timeN1').text("19:30～21:00");
			$('#timeN2').text("18:30～20:00");
		} else {
			// 12時間表示
			$('#timeO1').text("午前10時～午後5時");
			$('#timeN1').text("午後7時30分～午後9時");
			$('#timeN2').text("午後6時30分～午後8時");
		}
    });
	
	// 画面スクロールイベント時
	$(window).scroll(function() {
		
		// 画面が小さい時はアニメーションOFF
		if($(window).width() >= 640) {
			OpacityAnimation();
		} else {
			$(".fuwaxtu").css("opacity", "1");
		}
    	
	});
});


// 画面スクロールや画面リサイズ時に呼び出すと
// 画面の高さを取得して、
// 指定した項目(classやImgとか)が
// 画面外に出れば、フワッって消えて
// 画面内に入れば、フワッって表示します
// お試し版なので、単純な動きです。少し改良版。
function OpacityAnimation() {
	
	let scrollY1 = $(window).scrollTop();
	let scrollY2 = $(window).height() + scrollY1;
	
	$(".fuwaxtu").each(function(i) {
		
		let objY1 = $(this).offset().top;
		let objY2 = $(this).height() + objY1;
		
		if( scrollY1 <= objY2 && objY1 <= scrollY2) {
			if ( $(this).css("opacity") !== "1" ) {
				$(this).stop().animate({"opacity":"1"});
			}
		} else {
			if ( $(this).css("opacity") !== "0" ) {
				$(this).stop().animate({"opacity":"0"});
			}
		}
	});
}