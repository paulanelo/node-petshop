const http = require("http");
const url = require("url");
const { addPet, listPets } = require("./petshop");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html;charset=utf8");
  const { name } = url.parse(req.url, true).query;
  switch (true) {
    case /\/criar.+/.test(req.url):
      if (name) {
        addPet(name);
        return res.end(
          `${name} foi adicionado(a). <a href="/listar">Ver lista</a>`
        );
      }
    case /\/listar/.test(req.url):
      return res.end(listPets());
    default:
      return res.end("Você está dentro do sistema petshop!");
  }
});

server.listen(8000, "localhost");
