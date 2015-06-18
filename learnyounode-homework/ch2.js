var argv = process.argv;

var total = 0;
for (i=2; i < argv.length; i++) {
	total = total + Number(argv[i]);
}

console.log(total);
