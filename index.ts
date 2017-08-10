import http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('<a href="https://github.com/andresvia/generate-and-serve">hello world</a>');
});

server.listen(process.env.PORT || 8080, () => {});
