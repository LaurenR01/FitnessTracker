const express = require('express');
const logger = require( 'morgan');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const apiRoute = require("./routes/api");
const htmlRoute = require("./routes/html");
const routeIndex = require('./routes/index');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,   
}).then(con => {
    console.log("Database successfully connected")
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}.`);
});