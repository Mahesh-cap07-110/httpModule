const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to Home Page');
      break;
    case '/aboutus':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h3>Welcome to About Page</h3>');
      break;
    case '/contactus':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<a href="https://www.masaischool.com">Contact us at www.masaischool.com</a>');
      break;
    case '/index':
      fs.readFile('index.js', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(data);
        }
      });
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});