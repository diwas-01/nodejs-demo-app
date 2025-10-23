
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Sample Page</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          color: #333;
          text-align: center;
          padding: 50px;
        }
        h1 {
          color: #0078d7;
        }
        p {
          font-size: 18px;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to Diwash's Node.js Server 🚀</h1>
      <p>This is a simple sample page served from a Node.js HTTP server.</p>
      <p>Server running at <b>http://localhost:${port}</b></p>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
