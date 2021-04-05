const http = require("http");

const hostname = "localhost";
const port = 3000;

function webServer(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World, desde Node.js</h1>");
}

http.createServer(webServer).listen(port, hostname);

console.log(`Server running at http://${hostname}:${port}/`);
