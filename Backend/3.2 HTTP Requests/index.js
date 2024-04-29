import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1 id='level-title'>Hello, world!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About me!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>E-mail: william.ribeiro.moreno@gmail.com</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
