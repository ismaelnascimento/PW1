const express = require("express");
const app = express();
const port = 3000;

const pageMiddleware = (req, res, next) => {
  console.log(`Page: ${req.url}`)
  next();
};

app.use(pageMiddleware);

app.get("/", (req, res) => {
  res.send(`Initial page`);
});

app.get("/about", (req, res) => {
  res.send(`About page`);
});

app.post("/data", (req, res) => {
  res.send(`Data page to post`);
});

app.get("/users", (req, res) => {
  res.send(`Users page`);
});

app.get("/users/signin", (req, res) => {
  res.redirect("/users/signup");
});

app.get("/users/signin/:userid", (req, res) => {
  res.send(`Welcome user ${req.params.userid}`);
});

app.get("/users/signup", (req, res) => {
  res.send(`Signup page`);
});

app.use((err, req, res) => {
  req.status(404).send("404 - Not Found page");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
