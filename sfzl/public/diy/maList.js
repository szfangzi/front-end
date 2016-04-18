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

	//tab选项框
	$('.listSearchBox .tabBox a').click(function(){
		var $this = $(this);
		$('.listSearchBox .tabBox a').removeClass('on');
		$this.addClass('on');
	});

	//列表项选择
	$('.maListWrapper .list .item').click(function(event) {
		var $this = $(this);
		$this.parents('.list').find('.item').removeClass('on');
		$this.addClass('on');
	});
});