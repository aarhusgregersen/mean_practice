const http = require('http');

// ES6 arrow function that we set to take 2 inputs, the request and response objects
const server = http.createServer((req, res) => {
  res.end("This is my first response");
});

// We default to the port given to us by the host environment, OR default to 3000 if no environment variable is found.
server.listen(process.env.PORT || 3000);
