window.onload=function(){

	//广告关闭
	var banner = document.getElementById('top-banner');
	var xx = document.getElementById('xx');
	xx.onclick = function(){
		banner.style.display = 'none';
	}

	//图片轮播
	lunbo();

}

function lunbo(){
	
	
	var lBtn = document.getElementById('left');
	var rBtn = document.getElementById('right');
	var lunboBox = document.getElementById('lunbo');
	var lunbos = document.getElementById('one').childNodes;
	var lunboBtns = document.getElementById('two').childNodes;

	var currentIndex = 0;

	for (var i = 0; i < lunboBtns.length; i++) {
		
		lunboBtns[i].onmouseover = function(e){
			for (var i = 0; i < lunboBtns.length; i++) {
				if(lunboBtns[i].innerHTML == e.target.innerHTML){
					currentIndex = i;
				}
				lunboBtns[i].className = '';
				lunbos[i].className = '';
			};
			e.target.className = 'on';
			lunbos[currentIndex].className = 'on';

		}
	}

	rBtn.onclick = lBtn.onclick = function(e){
		lrBtn(e);
	}

	function lrBtn(e){
		var currentIndex = 0, newIndex = 0;

		for (var i = 0; i < lunboBtns.length; i++) {
			if(lunboBtns[i].className == 'on'){
				currentIndex = i;
			}
			lunboBtns[i].className = '';
			lunbos[i].className = '';
		};
		
		if(e.target.id == 'left'){
			newIndex = prevEl(lunbos, currentIndex);
		}else{
			newIndex = nextEl(lunbos, currentIndex);
		}
		
		lunbos[newIndex].className = 'on';
		lunboBtns[newIndex].className = 'on';
	}


	// 自动轮播
	var autoInterval = null;
	autoPlay();

	function autoPlay(){
		autoInterval = setInterval(function(){
			rBtn.click();
		}, 1000);
		
	}

	lunboBox.onmouseenter = function(e){
		clearInterval(autoInterval);
	}
	lunboBox.onmouseleave = function(){
		autoPlay();
	}

}

function isElement(el){
	if(el.nodeType == 1){
		return true;
	}
}

function nextEl(els, index){
	for (var i = index+1; i < els.length; i++) {
		if(els[i].nodeType == 1){
			return i;
		}else if(i == els.length-1){
			i = 0;
		}
	};
}

function prevEl(els, index){
	for (var i = index-1; i >= 0; i--) {
		if(els[i].nodeType == 1){
			return i;
		}else if(i == 0){
			i = els.length-1;
		}
	};

}
