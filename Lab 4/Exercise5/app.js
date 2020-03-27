const http = require("http");

const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    // res.end("Hello World\n");
    if (req.url === "/spin") {
        console.log("spinning");
        res.end("Slot Machine: Spinning");
    } else if (req.url === "/play") {
        console.log("playing");
        res.end("Slot Machine : Playing");
    } else {
        console.log("Please play or spin");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
