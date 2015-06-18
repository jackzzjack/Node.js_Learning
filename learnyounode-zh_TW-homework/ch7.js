var http = require('http');
var argv = process.argv;

// Don't forget "http" or "https"
http.get(argv[2], function(response) {
	response.setEncoding('utf8');

	response.on('data', function(data) {
		console.log(data);
	});
});
