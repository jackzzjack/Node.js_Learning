var bl = require('bl');
var cat = require('concat-stream');
var http = require('http');
var argv = process.argv;

http.get(argv[2], function(response) {
	response.pipe(bl(function(err, data) {
		if (err)
			console.log(err);

		console.log(data.length);
		console.log(data.toString());	
	}));
});
