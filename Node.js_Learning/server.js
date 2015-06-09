var http = require("http");
var url = require("url");

function start(router) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request is " + pathname);
        
        console.log("Get Request");
        
	router.route(pathname);
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World\n");
        response.write("The path name is going to " + pathname);
        
        response.end();
    }
    
    http.createServer(onRequest).listen(8888);
    console.log("On Listening");
}

exports.start = start;
