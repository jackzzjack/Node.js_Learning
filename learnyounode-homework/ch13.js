var http = require('http');
var url = require('url');
var argv = process.argv[2];

var server = http.createServer(function(req, res) {
	var mURL = url.parse(req.url, true);

	if (mURL.pathname != '/api/parsetime' && mURL.pathname != '/api/unixtime') {
		res.writeHead(200, { 'content-type' : 'text/plain' });
		res.end('path error');

		return;
	}

	if (typeof mURL.query.iso === 'undefined') {
		res.writeHead(200, { 'content-type' : 'text/plain' });
		res.end('token error');

		return;
	}

//	console.log("mURL.path = " + mURL.pathname);
//	console.log("token iso = " + mURL.query.iso);

	var date = new Date(mURL.query.iso);
	var msg = {};
	if (mURL.pathname == '/api/parsetime') {
		msg = { "hour" : date.getHours(), "minute" : date.getMinutes(), "second" : date.getSeconds() };
	} else if (mURL.pathname == '/api/unixtime') {
		msg = { 'unixtime' : date.getTime() };
	}

	var msgJson = JSON.stringify(msg);

//	console.log(msgJson);		

	res.writeHead(200, { 'Content-Type' : 'application/json' });
	res.write(msgJson);
	res.end();
});

server.listen(argv);
