// Using node core pkg making server
//create instance of http by required the http module
var http = require("http");
//Create the server Instance using http.createServer()
let server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
  res.write("<h1>Hello Anshu</h1>");
  res.end();
});
//let the server listen to the port
server.listen(8080, function () {
  console.log("Server Started on PORT =", 8080);
});
