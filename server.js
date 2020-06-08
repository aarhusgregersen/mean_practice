const http = require('http');
const app = require('./backend/app');

const port = process.env.PORT || 3000;

// ES6 arrow function that we set to take 2 inputs, the request and response objects
app.set('port', port);
const server = http.createServer(app);

// We default to the port given to us by the host environment, OR default to 3000 if no environment variable is found.
server.listen(port);
