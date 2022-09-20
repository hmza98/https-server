const Express = require("express");
const HTTPS = require("https");
const FS = require("fs");

var app = Express();

app.get("/", (request, response, next) => {
    response.send({ "message": "Hello World" });
});

HTTPS.createServer({
    key: FS.readFileSync("httpsserver.key"), //in same directory (self-signed)
    cert: FS.readFileSync("httpsserver.cert") //in same directory (self-signed)
}, app).listen(443, () => {
    console.log("Listening at :443...");
});