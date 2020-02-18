const http = require("http");
const url = require("url");
const { addPet, listPets, deletePet, findPet } = require("./petshop");

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
    case /\/listar$/.test(req.url):
      console.log("listar");
      return res.end(listPets());
    case /\/listar.+/.test(req.url):
      console.log("with param");
      if (name) {
        const result = findPet(name);
        console.log(result);
        if (result) {
          return res.end(
            `---------------------------<br><strong>${result.id} Nome do pet:</strong> ${result.name}<br>---------------------------<br><a href="/listar">Ver lista</a>`
          );
        }
        return res.end(
          `Não foi possível excluir o pet ${name}. Verifique o nome e tente novamente. <a href="/listar">Ver lista</a>`
        );
      }

    case /\/deletar.+/.test(req.url):
      if (name) {
        if (deletePet(name)) {
          return res.end(
            `${name} foi excluído(a).  <a href="/listar">Ver lista</a>`
          );
        }
        return res.end(
          `Não foi possível excluir o pet ${name}. Verifique o nome e tente novamente. <a href="/listar">Ver lista</a>`
        );
      }
    default:
      return res.end("Você está dentro do sistema petshop!");
  }
});

server.listen(8000, "localhost");
