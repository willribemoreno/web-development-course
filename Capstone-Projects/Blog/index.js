import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var userPosts = [];

function logger(req, res, next) {
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    console.log("Request Body: ", req.body);
    next();
}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

app.get("/", (req, res) => {
    res.render("index.ejs", { posts: userPosts, postsLenght: userPosts.length });
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs", { posts: userPosts });
});

app.get("/about", (req, res) => {
    res.render("about.ejs", { posts: userPosts });
});

app.get("/new-post", (req, res) => {
    res.render("new-post.ejs", { posts: userPosts });
});

app.post("/submit", (req, res) => {
    console.log(req.body);
    userPosts.push({
        name: req.body["inputName"],
        email: req.body["inputEmail"],
        title: req.body["inputTitle"],
        message: req.body["newPostTextArea"],
    })
    console.log(userPosts.length);
    res.redirect("/")
    // res.render("index.ejs", { posts: userPosts, postsLenght: userPosts.length });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});