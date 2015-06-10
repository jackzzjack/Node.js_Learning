var http = require("http");
var url = require("url");

function start(router, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        
        //console.log("Request is " + pathname);
        
        router.route(handle, pathname, response);
    }
    
    http.createServer(onRequest).listen(process.env.PORT, process.env.IP);
    console.log("On Listening");
}

exports.start = start;
