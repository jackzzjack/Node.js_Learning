var http = require('http');
var argv = process.argv[2];

var map = require('through2-map');

var server = http.createServer(function(req, res) {
	if (req != 'POST') {
		return "-1";
	}

	req.pipe(map(function(chunk) {
		return chunk.toUpperCase();
	})).pipe(res);
});

server.listen(argv);
