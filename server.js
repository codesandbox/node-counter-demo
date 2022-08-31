const http = require("http");

let viewCount = 0;
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`Amount of refreshes so far: ${viewCount++}`);
};

const server = http.createServer(requestListener);
server.listen(8080);
