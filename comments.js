// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
// Read comments from file
var comments = require('./comments.json');
// Read comments from file
var comments = require('./comments.json');
// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Set up the server
var server = app.listen(3000, function () {
    console.log('Server is running..');
});
// Get comments
app.get('/comments', function (req, res) {
    res.send(comments);
});
// Post comments
app.post('/comments', function (req, res) {
    var comment = req.body;
    comments.push(comment);
    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    res.send(comments);
});
// Put comments
app.put('/comments/:id', function (req, res) {
    var id = req.params.id;
    var comment = req.body;
    comments[id] = comment;
    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    res.send(comments);
});
// Delete comments
app.delete('/comments/:id', function (req, res) {
    var id = req.params.id;
    comments.splice(id, 1);
    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
    res.send(comments);
});
// Path: index.js
// Import express
var express = require('express');
// Import path
var path = require('path');
// Import body-parser
var bodyParser = require('body-parser');
// Import mongoose
var mongoose = require('mongoose');
// Initialize the app
var app = express();
// Connect to MongoDB
mongoose.connect('mongodb://localhost/comment');
// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Require Comment model
require('./Comment');
var Comment = mongoose.model('Comment');
// Set up the server
var server = app.listen(3000, function () {
    console.log('Server is running..');
});
// Get comments