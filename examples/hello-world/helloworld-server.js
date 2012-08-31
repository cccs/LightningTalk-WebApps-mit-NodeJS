var http = require("http");

http.createServer(function(request, response) {
  console.log("Anfrage empfangen.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hallo Welt");
  response.end();
}).listen(3000);

console.log("Server wurde gestartet.");
