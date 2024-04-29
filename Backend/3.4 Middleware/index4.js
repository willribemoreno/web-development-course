import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  var street = req.body["street"];
  var streetChar = street.charAt(0).toUpperCase();
  street = streetChar + street.slice(1);

  var pet = req.body["pet"];
  var petChar = pet.charAt(0).toUpperCase();
  pet = petChar + pet.slice(1);

  const bandName = street + pet;

  const submitHTML = `<h1>Your band name is:<h2> ${bandName}✌️</h2></h1>`;
  console.log(`The band name is : + ${bandName}✌️`);
  res.send(submitHTML);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
