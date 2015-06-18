var http = require('http');
var argv = process.argv;

var counter = 0;
var result = [];

function print(msg, order) {
	result[order] = msg;
	counter++;

	if (counter == 3)
		result.forEach(function(data) {
			console.log(data);
		});
}

function getData(response, order) {
	var total_data = "";

	response.setEncoding('utf8');

	response.on('data', function(data) {
		total_data = total_data + data;
	});

	response.on('end', function() {
		print(total_data, order);
	});

	response.on('error', function(err) {
//		console.log(err);
	});
}

function first() {
	http.get(argv[2], function(response) {
		if (response.statusCode == 200)
			getData(response, 0);
	});
}

function second() {
	http.get(argv[3], function(response) {
		if (response.statusCode == 200)
			getData(response, 1);
	});
}

function third() {
	http.get(argv[4], function(response) {
		if (response.statusCode == 200)
			getData(response, 2);
	});
}

first();
second();
third();
