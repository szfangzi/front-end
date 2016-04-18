//AJAX封装
function ajax(option){

	var ajaxFunc = $.ajax({
		url: option.url,
		type: option.type || 'GET',
		dataType: option.dataType || 'json',
		data: option.data || {},
		async:option.async == false ? false : true,
		beforeSend:function(){
			if(option.isLoad){
				loading();
			}
		}
	})
	.done(option.callback || function(data){

	})
	.fail(function(a,b,c) {
		console.log("error",a,b,c);
	})
	.always(function(evt, req, settings) {
		unloading();
		if(req.status == 404){
        	console.log(404);
    	}
	});
	
}

//loading加载图
function loading(){
	var html = '<div class="loadingWrapper" style="display: block;">\
		<div class="spinner">\
		  <div class="spinner-container container1">\
		    <div class="circle1"></div>\
		    <div class="circle2"></div>\
		    <div class="circle3"></div>\
		    <div class="circle4"></div>\
		  </div>\
		  <div class="spinner-container container2">\
		    <div class="circle1"></div>\
		    <div class="circle2"></div>\
		    <div class="circle3"></div>\
		    <div class="circle4"></div>\
		  </div>\
		  <div class="spinner-container container3">\
		    <div class="circle1"></div>\
		    <div class="circle2"></div>\
		    <div class="circle3"></div>\
		    <div class="circle4"></div>\
		  </div>\
		</div>\
		<div class="mask" style="display: block;"></div>\
	</div>';
	$('body').append(html);
	$('.loadingWrapper').show();
}
function unloading(){
	$('.loadingWrapper').remove();
}

// function initSelect(option){
// 	if(option.selector){
// 		$(selector).width(option.width || 72);
// 	}
// }

$(function(){

	$('a').bind('focus',function() {
		if(this.blur){this.blur()};
	});

	// 头部导航搜索类别切换
	$('.search_list li').click(function(){
		$(this).addClass('on').siblings('li').removeClass('on');
		var valueText=$(this).html();
		$('.search_input').attr('placeholder','请输入'+valueText+'名称');
	});

	//二级导航
	$('.nav_list>li').hover(function() {
		$(this).addClass('on').siblings('li').removeClass('on');
		$('.drop_box').hide();
		$(this).find('.drop_box').show();
	}, function() {
		$(this).removeClass('on');
		$(this).find('.drop_box').hide();
	});
});

