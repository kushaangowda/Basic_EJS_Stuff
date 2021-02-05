const express = require("express");
const logger = require("morgan"); // store info or logging
const ejs = require("ejs");
const bodyParser = require("body-parser"); // for post data

var indexRouter = require("./routes/index");

var port = process.env.PORT || 3000;

//create instance of express app
var app = express();

//to serve html and js in ejs
app.set("view engine", "ejs");

//we want to send css, images, and other static files from folder views
app.use(express.static("views"));
app.set("views", __dirname + "/views");

// give server access to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//logging in development mode
app.use(logger("dev"));

// // '/' stands for root url
app.use("/", indexRouter);

app.use(function (req, res, next) {
	res.status(404).render("404error.ejs");
});

app.listen(port, () => console.log(`listening to PORT ${port}...`));
