var http = require("http");
var url = require("url");

function start(router, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        
        //console.log("Request is " + pathname);
        
        request.setEncoding("utf8");
        
        request.addListener("data", function(postDataChunk) {
           postData = postData + postDataChunk;
           console.log("Receive POST data chunk '" + postDataChunk + "'");
        });
        
        request.addListener("end", function() {
            router.route(handle, pathname, response, postData);
        });
        
        //router.route(handle, pathname, response);
    }
    
    http.createServer(onRequest).listen(process.env.PORT, process.env.IP);
    console.log("On Listening");
}

exports.start = start;
