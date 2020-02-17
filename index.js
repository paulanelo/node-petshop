const http = require('http');
const { addPet, listPets } = require('./petshop');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    switch(req.url) {
        case '/criar':
            return res.end('pets');
        case '/listar':
            return res.end(listPets())
        default:
            return res.end('Você está dentro do sistema petshop!');
    }
});

server.listen(3000, 'localhost');