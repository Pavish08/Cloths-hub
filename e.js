var http = require("http");

var server = http.createServer(function(req, res) {

    if (req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>GET Request Successful</h1>");
    }

});

server.listen(3000);

console.log("Server running at http://localhost:3000");
