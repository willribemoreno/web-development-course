import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/submit", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
