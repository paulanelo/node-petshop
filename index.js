const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    })
    res.end('Você está dentro do servidor!');
});

server.listen(3000);