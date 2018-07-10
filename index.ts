import fs from 'fs';
import http, { IncomingMessage, ServerResponse } from 'http';

const PORT = 8080;

const server = http.createServer((request: IncomingMessage, response: ServerResponse) => {

  // Form
  if (request.method === 'GET') {
    response.write(
      fs.readFileSync('index.html')
    );
    response.end();
  }

  // File
  else if (request.method === 'POST') {
    response.end();
  }

  // Unknown
  else {
    response.end();
  }
});

server.on('error', (err: Error) => {
  console.error(err);
});

server.listen(PORT);

console.log(`Listening on port ${PORT}.`)
