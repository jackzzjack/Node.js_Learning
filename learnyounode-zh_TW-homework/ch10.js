var net = require('net');
var argv = process.argv;
var date = new Date();

var log = "";
var fixMonth = (Number(date.getMonth())+1) < 10 ? ("0" + (Number(date.getMonth()+1))) : (Number(date.getMonth()+1));

log = date.getFullYear() + "-" +
	fixMonth + "-" +     // starts at 0
	date.getDate() + " " +      // returns the day of month
	date.getHours() + ":" +
	date.getMinutes();

var server = net.createServer(function(socket) {
	socket.end(log+"\n");
});

server.listen(argv[2]);
