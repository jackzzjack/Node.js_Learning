var http = require('http');
var argv = process.argv;

var len = 0;
var data_ = "";

http.get(argv[2], function(response) {
	response.setEncoding('utf8');

	response.on('data', function(data) {
		len = len + data.length;
		data_ = data_ + data;
	});

	response.on('end', function() {
		console.log(len);
		console.log(data_);
	});
});
		
