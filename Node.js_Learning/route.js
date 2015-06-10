function route(handle, pathname, response) {
    //console.log("The request name is " + pathname);
    
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        
        response.writeHead(404, {"Context-Type" : "text/plain"});
        response.write("404 not found.");
        response.end();
    }
}

exports.route = route;