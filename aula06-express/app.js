const express = require("express");
const app = express();
const port = 3000;

const pageMiddleware = (req, res, next) => {
  res.send(`Acessando a página ${req.url}`);
  next();
};

app.use(pageMiddleware);

app.get("/", (req, res) => {
  res.send(`/`);
});

app.get("/about", (req, res) => {
  res.send(`about`);
});

app.post("/data", (req, res) => {
  res.send(`data`);
});

app.get("/users", (req, res) => {
  res.send(`Users`);
});

app.get("/users/signin:id", (req, res) => {
  if (req.params.id) {
    res.send(`Bem vindo usuário ${req.params.id}`);
  } else {
    res.redirect("/singup");
  }
});

app.get("/users/signin", (req, res) => {
  res.send(`signin`);
});

app.get("/users/sinup", (req, res) => {
  res.send(`singup`);
});

app.use((err, req, res, next) => {
  res.status(404).send("404 - Página não encontrada");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
