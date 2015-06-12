/*
 *  Formidable can help you to resolve the form attributes.
 */

// var exec = require("child_process").exec;
var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require('formidable');

function start(response) {
    console.log("Request Handler 'start' was called.");
    
    /*exec("ls -lah", function(error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        
        //response.write("This is start page.\n");
    
        response.end();
    });*/
    
    /*exec("find /", { timeout: 10000, maxBuffer: 10000*1024 }
        , function(error, stdout, stderr) {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write(stdout);
            
            response.end();
        });*/
        
   /* var body = '<html>' +
                '<head>' +
                '<meta http-equiv="Content-Type" content="text/html; ' +
                'charset=UTF-8" />' +
                '</head>' +
                '<body>' +
                '<form action="/upload" method="post">' +
                '<textarea name="text" rows="20" cols="60"></textarea>' +
                '<input type="submit" value="Submit text" />' +
                '</form>' +
                '</body>' +
                '</html>';*/
                 // Normal Mode (Ready to Upload Page)
    var body = 
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="text" name="title"><br>' +
        '<input type="file" name="upload" multiple="multiple"><br>' +   // Need to check what is multiple attribute.
        '<input type="submit" value="Upload">' +
        '</form>';
                
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write(body);
    response.end();
}

function upload(response, request) {
    console.log("Request Handler 'upload' was called.");
    
    var form = new formidable.IncomingForm();
    form.parse(request, function(error, fields, files) {
       console.log("parsing done.");
       
       fs.renameSync(files.upload.path, '/tmp/test.png');
       response.writeHead(200, {"content-type" : 'text/html'});
       response.write('received image: <br />');
       response.write("<img src='/show' /");
       resonse.end();
    });
    
    //response.writeHead(200, {"Content-Type": "text/plain"});
    //response.write("You have send " + querystring.parse(postData).text);
    
    //response.write("This is Upload\n");
    
    //response.end();
}

function show(response) {
    console.log("Request handler 'show' was called.");
    
    fs.readFile("/tmp/test.png", "binary", function (err, data) {
        if (err) {
            response.writeHead(500, {"Content-type": "text/plain"});
            response.write(err + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type" : "image/png"});
            response.write(data, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;