var map = require('through2-map');
var http = require('http')
var argv = process.argv;
var data = "";

var server = http.createServer(function(req, res) {
	req.setEncoding('utf8');

	req.on('data', function(package1) {
//		req.pipe(map(function(chunk) {
		data = data + package1.toUpperCase();
		;
	});

	req.on('end', function() {
		console.log(data);

		res.writeHead(200, { 'content-type' : 'text/plain' });
		res.write(data);
		res.end();
	});

});

server.listen(argv[2]);
/*inStream.pipe(map(function (chunk) {
      return chunk.toString().split('').reverse().join('')
    })).pipe(outStream)*/
