var filefilter = require('./ch6_module');
var argv = process.argv;

filefilter(argv[2], argv[3], function(err, log) {
	if (err)
		console.log(err);
	else {
		log.forEach(function(loge) {
			console.log(loge);
		});
	}
});
