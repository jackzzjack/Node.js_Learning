var fs = require("fs");
var argv = process.argv;
var path = require("path");

fs.readdir(argv[2], function(err, files) {
	var extname = "." + argv[3];

	for (i=0; i < files.length; i++) {
		var tmp = path.extname(files[i]);

		if (tmp === extname)
			console.log(files[i]);
	}
});
