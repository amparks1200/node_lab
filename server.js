const quotes = require("./quotes");

const index = Math.floor(Math.random() * quotes.length); // random number as the array index

const randomQuote = quotes[index]; // quote in index

console.log(randomQuote);

"use strict";
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.write(random);
    res.end();
}).listen(8888);