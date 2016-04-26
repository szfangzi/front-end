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
	$('.adminBox .menu .li .a').click(function(){
		var $this = $(this);

		if($this.parents('li').find('.subMenu').is(":hidden")){
			$this.parents('li').addClass('on');
		}else{
			$this.parents('li').removeClass('on');
		}
	});
	
});

