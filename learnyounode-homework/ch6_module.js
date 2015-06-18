var fs = require('fs');
var path = require('path');
var argv = process.argv;

module.exports = function(filepath, subname, callback) {
	var preExt = "." + subname;
	var arr = [];
	
	fs.readdir(filepath, function(err, files) {
		if (err) {
			return callback(err);
		}
	
		files.forEach(function(file) {
			if (path.extname(file) === preExt) {
				arr.push(file);
			}
		});

		callback(null, arr);
	});
};

// module.exports.listExtname = listExtname;
// exports.listExtname = listExtname;
