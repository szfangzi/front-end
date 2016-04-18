$(function(){
	//轮播广告
	$(".slideBox").slide({
		mainCell:".bd ul",
		autoPlay:true,
		trigger:"click",
		effect:"fold"
	});

	// 详情 评价 晒单切换
	$('.tabBox a').click(function(){
		var $this = $(this);
		$('.cBox').hide();
		$('.tabBox a').removeClass('on');
		$this.addClass('on');

		if($this.hasClass('de')){
			$('.deBox').show();
		}else if($this.hasClass('pi')){
			$('.piBox').show();
		}else if($this.hasClass('sa')){
			$('.saBox').show();
		}else if($this.hasClass('re')){
			$('.reBox').show();
		}

	});
	
	$('.tryBox .openBtn').click(function(){
		$('.tryBox').hide();
		$('.tryBox.open').show();
	});
	$('.tryBox .closeBtn').click(function(){
		$('.tryBox').hide();
		$('.tryBox.close').show();
	});

});