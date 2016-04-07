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
		if($this.hasClass('designTab')){
			$('.designer').show();
			$('.flower').hide();
			$('.searchTag').hide();
			$('.listSearchBox').height(50);
		}else if($this.hasClass('flowerTab')){
			$('.flower').show();
			$('.designer').hide();
			$('.searchTag').show();
			$('.listSearchBox').height(50 + $('.searchTag').height());
		}
	});

//查看作品
	var options = {
		closeOnConfirm:false
	};
    var flowerModal = $('[data-remodal-id=modal]').remodal(options);

    $('.designerList .viewBtn').click(function(){
    	flowerModal.open();
    });
    $(document).on('confirmation', '.designerFlowerListModal', function () {
    	flowerModal.close();
	});

//点赞
	$('.designerList .like').click(function(){
		var $this = $(this),
			oldLike = parseInt($this.parents('.item').find('.m s3 i').html());

		ajax({
			url:'', 
			callback:function(data){
				if(data.result == 0){
					$this.parents('.item').find('.m s3 i').html(oldLike+1);
				}
			}
		});
		

	});
});