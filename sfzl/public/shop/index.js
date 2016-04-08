$(function(){
	$(".slideBox").slide({
		mainCell:".bd ul",
		autoPlay:true,
		trigger:"click",
		effect:"fold"
	});
	$('.all_type').hover(function(){
		$('.menu_main').show();
	});
	$('.all_typebox').mouseleave(function(){
		$('.menu_main').hide();
	});

});