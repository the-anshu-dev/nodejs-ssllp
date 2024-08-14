'use strict'

const http = require("http");
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
  res.write("<h1>Hello Anshu Bhai</h1>");
  res.end();
});
//let the server listen to the port
server.listen(5555, function () {
  console.log("Server Started on PORT =", 5555);
});
