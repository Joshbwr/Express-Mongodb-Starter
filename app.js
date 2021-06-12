require('dotenv').config();
const express = require('express');
const cors = require("cors");


const app = express();

const api = require('./api/routes/index.js');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello from Api!')
});

app.use('/api', api);

module.exports = app;