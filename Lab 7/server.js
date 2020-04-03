const mongoose = require("mongoose");

const Restaurant = require("./model/Restaurant");

const Order = require("./model/Order");
//mongoose.connect("");

const http = require("http"),
    url = require("url"),
    fs = require("fs"),
    io = require("socket.io");

const connectionString =
    "mongodb://DeadPrez001:zakariya@zakscluster0-shard-00-00-3rxf3.azure.mongodb.net:27017,zakscluster0-shard-00-01-3rxf3.azure.mongodb.net:27017,zakscluster0-shard-00-02-3rxf3.azure.mongodb.net:27017/test?ssl=true&replicaSet=ZaksCluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true }).then(
    () => {
        console.log("Mongoose connected successfully ");
    },
    error => {
        console.log("Mongoose could not connect to the database: " + error);
    }
);

const server = http.createServer(function(req, res) {
    var path = url.parse(req.url).pathname;
    switch (path) {
        case "/":
            fs.readFile(__dirname + "/index.html", function(err, data) {
                if (err) return send404(res);
                res.writeHead(200, {
                    "Content-Type":
                        path == "json.js" ? "text/javascript" : "text/html"
                });
                res.write(data, "utf8");
                res.end();
            });
            break;

        default:
            send404(res);
    }
});
const send404 = function(res) {
    res.writeHead(404);
    res.write("404");
    res.end();
};

const PORT = 8080;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

// socket.io, I choose you
const ioServer = io.listen(server);

// socket.io setup and manager
ioServer.on("connection", function(socket) {
    // now we have a client object!
    console.log("Connection accepted.");

    // event listeners
    socket.on("message", function(message) {
        console.log(`Recieved message: ${message} - from client`);
        socket.emit("msgreceived");
    });

    socket.on("disconnect", function() {
        console.log("Disconnected...");
    });

    socket.on("get-restaurants", () => {
        console.log("server - get-restarants called");

        Restaurant.find((error, documents) => {
            if (error)
                console.log(`Error occured on Restaurant.find(): ${error}`);
            else {
                console.log(
                    `Restaurant.find() returned documents: ${documents}`
                );
                const data = documents.map(x => x.name);
                console.log(data);
                socket.emit("restaurants-data", data);
            }
        });
    });

    socket.on("get-orders", () => {
        console.log("server - get-orders called");

        Order.find((error, documents) => {
            if (error) console.log(`Error occured on Order.find(): ${error}`);
            else {
                console.log(`Order.find() returned documents: ${documents}`);
                //const data = documents.map(x => x.name);
                socket.emit("orders-data", JSON.stringify(documents));
            }
        });
    });

    socket.on("add-order", () => {
        console.log("server - add-order called");

        Order.create([
            {
                orderid: "007",
                item: "Martini",
                customer_name: "James Bond"
            }
        ])
            .then(() => console.log("Order Creation successful"))
            .catch(error =>
                console.log(`Error occured while creating an order: ${error}`)
            );
        socket.emit("order-data-added", JSON.stringify(Order));
    });
});
