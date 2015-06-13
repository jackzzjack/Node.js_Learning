/*var formidable = require('formidable'),
    http = require('http'),
    sys = require("sys");
    
http.createServer(function(req, res) {
    if (req.url == "/upload" && req.method.toLowerCase() == "post") {
        // parse a file upload (Get the upload file page)
        var form = new formidable.IncomingForm();
        
        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'content-type' : 'text/plain'});
            res.write('received upload:\n\n');
            
            // sys.inspect need to research.
                // inspect function means show the specific variable in standard output.
                    // You can use key-value form with title and content. Just like following statement.
            res.end(sys.inspect({ f: fields, files: files}));
        });
        
        return;
    }
    
    // Normal Mode (Ready to Upload Page)
    res.writeHead(200, {'content-type' : 'text/html'});
    res.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="text" name="title"><br>' +
        '<input type="file" name="upload" multiple="multiple"><br>' +   // Need to check what is multiple attribute.
        '<input type="submit" value="Upload">' +
        '</form>'
    );
    
}).listen(process.env.PORT, process.env.IP);*/

var http = require("http");
var url = require("url");

function start(router, handle) {
    function onRequest(request, response) {
        //var postData = "";
        var pathname = url.parse(request.url).pathname;
        
        //console.log("Request is " + pathname);
        
        //request.setEncoding("utf8");
        
        router.route(handle, pathname, response, request);
    }
    
    http.createServer(onRequest).listen(process.env.PORT, process.env.IP);
    console.log("On Listening");
}

exports.start = start;
