const express = require("express");
const http = require("http");
const path = require('path');

const app = express();
const server = http.createServer(app);
const port = 8080;


app.use(express.static(path.join(__dirname, 'pages')));
app.use(express.static(path.join(__dirname, 'public')));
  
app.listen(port, () => {
	console.log(`iskolar up on http://localhost:${port}`);
})