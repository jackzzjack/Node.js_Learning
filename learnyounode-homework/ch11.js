var http = require('http');
var argv = process.argv;
var fs = require('fs');

var server = http.createServer(function(req, res) {
	var file = fs.createReadStream(argv[3]);
	file.pipe(res);
});

server.listen(argv[2]);
