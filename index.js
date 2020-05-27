var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const TodoController = require("./controllers/TodoController");

// api get todo ...
app.get("/todo", TodoController.get);
app.post("/todo", TodoController.post);
app.put("/todo/:id", TodoController.put);
app.delete("/todo/:id", TodoController.delete);

// init service port 3000 ...
app.get("/", function (req, res) {
  res.send({ status: true, description: "Servidor Online" });
});
app.listen(3000, function () {
  console.log("App de Exemplo escutando na porta 3000!");
});
