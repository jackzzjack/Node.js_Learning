var fs = require('fs');
var argv = process.argv;
var buffer = fs.readFile(argv[2], function(err, data) {
	if (err != null)
		return;

	var splitToken = data.toString().split("\n");
	var total = 0;

	for (i=0; i < splitToken.length; i++) {
        	total = total + 1;
	}

	total = total - 1;

	console.log(total);

});
