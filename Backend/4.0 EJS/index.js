import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

app.get("/", (req, res) => {
  const date = new Date();
  let day = date.getDay();
  const weekdayMsg = "it's time to work hard!";
  const weekendMsg = "it's time to have fun!";
  const dataType = ["weekday", "weekend"];

  if (day === 0 || day === 6) {
    console.log(dataType[1]);
    res.render(`${__dirname}/views/index.ejs`, {
      dataType: dataType[1],
      advice: weekendMsg,
    });
  } else {
    console.log(dataType[0]);
    res.render(`${__dirname}/views/index.ejs`, {
      dataType: dataType[0],
      advice: weekdayMsg,
    });
  }

  // Sunday = 0, Monday = 1, ... (See below):

  console.log(day);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
