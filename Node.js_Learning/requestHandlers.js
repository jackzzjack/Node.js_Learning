var exec = require("child_process").exec;

function start(response) {
    console.log("Request Handler 'start' was called.");
    
    exec("ls -lah", function(error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        
        //response.write("This is start page.\n");
    
        response.end();
    });
}

function upload(response) {
    console.log("Request Handler 'upload' was called.");
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("This is Upload\n");
    
    response.end();
}

exports.start = start;
exports.upload = upload;