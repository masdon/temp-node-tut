const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === '/') {
    res.end('Welcome to home page');
    return;
  }
  if (req.url === '/about') {
    res.end('Here is our shoet history');
    return;
  }

  res.end(`
  <h1>Oops!</h1>
  <p>We can't find the page</p>
  <a href="/">back home</a>
  `);
});

server.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port ' + port);
  }
});
