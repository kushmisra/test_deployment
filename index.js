const express = require("express");
const http = require("http");

const app = express();
const server = http.Server(app);

const port=process.env.PORT || 5000

const path = require('path')

// app.set("view engine", "ejs");

// GET Route - HOME PAGE
// app.get("/", (req, res) => {
// 	res.render("index");
// });

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

server.listen(port, () => {
	console.log("Server started at port " + port);
})