const http = require('http');
const findAvailablePort = require('find-available-port');

async function startServer() {
  const defaultPort = 8080;
  let port = defaultPort;

  try {
    const availablePort = await findAvailablePort(defaultPort);
    port = availablePort;
    const requestListener = (request, response) => {
      response.writeHead(200);
      response.end('Hello, World!');
    };

    const server = http.createServer(requestListener);
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Please choose a different port.`);
    } else {
      console.error(`Failed to start server: ${error}`);
    }
  }
}

startServer();