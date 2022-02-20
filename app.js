const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

var portatil = [];

app.get("/portatil", (req, res) => {
  res.json(portatil);
});

app.post("/portatil", (req, res) => {
  console.log(req.body);
  portatil.push(req.body);
  //res.json(portatil);
  res.redirect("/index.html");
});

var celulares = [];

app.get("/celulares", (req, res) => {
  res.json(celulares);
});

app.post("/celulares", (req, res) => {
  console.log(req.body);
  celulares.push(req.body);
  //res.json(celulares);
  res.redirect("/index.html");
});

var tabletas = [];

app.get("/tabletas", (req, res) => {
  res.json(tabletas);
});

app.post("/tabletas", (req, res) => {
  console.log(req.body);
  tabletas.push(req.body);
  //res.json(tabletas);
  res.redirect("/index.html");
});

var clientes = [];

app.get("/clientes", (req, res) => {
  res.json(clientes);
});

app.post("/clientes", (req, res) => {
  console.log(req.body);
  clientes.push(req.body);
  //res.json(clientes);
  res.redirect("/index.html");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
