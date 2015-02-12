var http = require('http');
var compressor = require('node-minify');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");

setInterval(function(){
	test();
}, 10000);

function test(){
	new compressor.minify({
		publicFolder: 'static/css/',
	    type: 'yui-css',
	    fileIn: ['a.css', 'b.css'],
	    fileOut: 'base-min-yui.css',
	    callback: function(err, min){
	    }
	});
	new compressor.minify({
		publicFolder: 'static/js/',
	    type: 'yui-js',
	    fileIn: ['jquery-2.1.0.js', 'underscore1.7(ext).js', 'main.js'],
	    fileOut: 'public/js/base.js',
	    callback: function(err, min){
	    }
	});
}
console.log('Server running at http://127.0.0.1:1337/');