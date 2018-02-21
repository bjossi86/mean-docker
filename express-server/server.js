const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./routes/api');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// console.log('hæ bjössi!');

// app.all('*', function(req, res, next) {
//     if(req.headers.origin == 'http://localhost:4200'){
//         res.header("Access-Control-Allow-Origin", req.headers.origin);
//         res.header('Access-Control-Allow-Methods', 'POST, GET');
//         res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//         res.header('Access-Control-Allow-Headers', 'Content-Type');
//     }
// }

// Cross Origin middleware
app.use(function(req, res, next) {
  // req.header("Access-Control-Allow-Origin", "*");
  // console.log(req);
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use('/', api);

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost port: ${port}`));