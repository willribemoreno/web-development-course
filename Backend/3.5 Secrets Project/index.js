//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userAuthorized = false;

function passwordCheck(req, res, next) {
  const password = "ILoveProgramming";

  if (req.body["password"] === password) {
    console.log(`Successful authentication`);
    userAuthorized = true;
  } else {
    console.log(`Authentication failed`);
    userAuthorized = false;
  }
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(passwordCheck);

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
  console.log(`${__dirname}/public/index.html`);
});

app.post("/check", (req, res) => {
  if (userAuthorized) {
    res.sendFile(`${__dirname}/public/secret.html`);
  } else {
    res.send(
      `<h1 style=background-color:red>Authentication Error!</h1><h2>Your password is invalid.</h2>`
    );
    res.sendStatus(401);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
