var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("Get Request");
        
        response.write("Hello World");
        response.end();
    }
    
    http.createServer(onRequest).listen(8888);
    console.log("On Listening");
}

exports.start = start;