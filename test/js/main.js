var unique = require('uniq');
var $ = require('./jquery.js');
var m2 = require('./main2.js');
var _ = require('./vendor/underscore1.7(ext).js');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

$(function(){
	_.each(data, function( value, key, list ) {
		console.log(value, key);
	})
});


