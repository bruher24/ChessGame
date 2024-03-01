// const http = require('http');
// var fs = require('fs');
// var server = http.createServer(function (req, res) {
//     console.log('works');
//     if (req.url.endsWith('.css')) {
//         fs.readFile('./styles/index.css', (err, data) => {
//             if (err) throw err;

//             res.setHeader('Content-Type', 'text/css');
//             res.statusCode = 200;
//             res.write(data);
//             res.end();
//         });
//     } else if (req.url.endsWith('.js')) {
//         fs.readFile('./scripts/app.js', (err, data) => {
//             if (err) throw err;

//             res.setHeader('Content-Type', 'text/javascript');
//             res.statusCode = 200;
//             res.write(data);
//             res.end();
//         });
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         var myReadStream = fs.createReadStream('./index.html', 'utf8');
//         myReadStream.pipe(res);
//     }
// });

// server.listen(3000, '127.0.0.1');
// console.log('Прослушивание порта 3000');


var express = require('express');
var app = express();
const path = require('path');
var fs = require('fs');

app.use(express.static(path.join(__dirname, '/public/')));

app.listen(3000);

app.get('/', function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var myReadStream = fs.createReadStream('./index.html', 'utf8');
        myReadStream.pipe(res);
});
app.get('/index.html', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream('./index.html', 'utf8');
    myReadStream.pipe(res);
});

app.get('/game.html', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream('./game.html', 'utf8');
    myReadStream.pipe(res);
});
app.get('/gameOver.html', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream('./gameOver.html', 'utf8');
    myReadStream.pipe(res);
});