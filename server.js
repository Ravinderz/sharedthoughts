const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');
const mongoose = require('mongoose');
const config = require('./config');

const db = mongoose.connect(config.database,{ useMongoClient: true});

// getting api routes
const user = require('./server/routes/user.route');

const app = express();

// API file for interacting with MongoDB
//const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api/v1.0/user', user);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
