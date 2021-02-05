var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
	//Select all customers and return the result object:
	res.render("index.ejs");
});

module.exports = router;
