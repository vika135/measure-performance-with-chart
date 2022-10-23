const express = require("express");
const app = express();
app.server = require('http').createServer(app);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
});

app.use(express.static(__dirname + '/dist'));

app.server.listen(8000);