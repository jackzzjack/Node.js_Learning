var fs = require('fs');
var argv = process.argv;
var buffer = fs.readFileSync(argv[2]);

var splitToken = buffer.toString().split("\n");
var total = 0;

for (i=0; i < splitToken.length; i++) {
	total = total + 1;
}

total = total - 1;

console.log(total);
