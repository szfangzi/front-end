$(function(){
	//轮播广告
	$(".slideBox").slide({
		mainCell:".bd ul",
		autoPlay:true,
		trigger:"click",
		effect:"fold"
	});
	//头部导航
	$('.all_type').hover(function(){
		$('.menu_main').show();
	});
	$('.all_typebox').mouseleave(function(){
		$('.menu_main').hide();
	});

	//搜索下拉
	$('.selectBox').hover(function(){
		var $this = $(this);
		$this.find('li').show();
	}, function(){
		var $this = $(this);
		$this.find('li:not(.on)').hide();
	});
	$('.selectBox li').click(function(){
		var $this = $(this);
		$this.parents('.selectBox').find('li').removeClass('on').hide();
		$this.addClass('on').show();
	});

	//列表项选择
	$('.faListWrapper .list .item .isSelected').click(function(event) {
		var $this = $(this);
		$this.parents('.list').find('.item').removeClass('on');
		$this.parents('.item').addClass('on');
	});
});