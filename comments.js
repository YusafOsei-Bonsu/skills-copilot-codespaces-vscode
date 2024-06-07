// Create web server
const express = require('express');
const app = express();
const port = 3000;

// middleware
app.use(express.json());

// data
let comments = [
    {
        id: 1
    }
];