var express = require("express");
var app = express();

const TodoController = require("./controllers/TodoController");

app.get("/", function (req, res) {
  res.send("Olá Mundo!");
});

app.get("/todo", TodoController.get);

app.listen(3000, function () {
  console.log("App de Exemplo escutando na porta 3000!");
});
