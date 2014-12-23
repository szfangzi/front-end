//ASCII 转换 Unicode
function asciiToUnicode(str) {
    var result = '';
    for (var i=0; i<str.length; i++){
        result += '&#' + str.charCodeAt(i) + ';';
    }
    return result;
}

//Unicode 转换 ASCII
function unicodeToAscii(str) { 
    var result = '';
    var code = str.match(/&#(\d+);/g);
    if (code == null) { 
        console.log(str+'中没有合法的Unicode代码！');
        return; 
    }
    for(var i=0; i<code.length; i++){
        result += String.fromCharCode(code[i].replace(/[&#;]/g, ''));console.log(result);
    }
    return result;
}

Array.prototype.insert = function (index, item) {  
  this.splice(index, 0, item);  
};
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
function getLocalTime(nS){     
    return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,17)
}


//crtl+z事件
var isCtrl = false;
$(document).keydown(function (e) {
    if (e.which === 17){
        isCtrl = true;
    }
    if (e.which === 90 && isCtrl === true) {
        //撤销历史记录
        revoke();
    }
}).keyup(function (e) {
    if (e.which === 17){
        isCtrl = false;
    }
});

function uncdata(str){
    var cdataStart = str.indexOf('<!--[CDATA[');
    var cdataEnd = str.indexOf(']]-->');
    return str.substring(cdataStart+11, cdataEnd);
}

function cdata(str){
    return '<!--[CDATA[' + str + ']]-->';
}