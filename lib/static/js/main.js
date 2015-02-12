
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

$(function(){
	_.each(data, function( value, key, list ) {
		console.log(value, key);
	})
});


