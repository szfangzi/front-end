$(function(){

//轮播广告
	$(".slideBox").slide({
		mainCell:".bd ul",
		autoPlay:true,
		trigger:"click",
		effect:"fold"
	});

	//精选滑动
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

	//换推荐
	$('.change_btn dis_line').click(function(event) {
		
		ajax({
			url:'', 
			callback:function(data){
				if(data.result == 0){
					var html = _.template($('#tpl').html(), data);
					$('.change_list').html(html);
				}
			}
		});

	});


});