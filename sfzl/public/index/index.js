$(function(){
	$(".slideBox").slide({
		mainCell:".bd ul",
		autoPlay:true,
		trigger:"click",
		effect:"fold"
	});
	$(".picScroll-left").slide({
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"left",
		autoPage:true,
		autoPlay:false,
		vis:5,
		trigger:"click",
		pnLoop:false,
		scroll:1
	});
	
});