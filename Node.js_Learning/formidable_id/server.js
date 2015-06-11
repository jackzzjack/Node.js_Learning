var formidable = require('formidable'),
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
            res.end(sys.inspect({ fields: fields, files: files}));
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
    
}).listen(process.env.PORT, process.env.IP);