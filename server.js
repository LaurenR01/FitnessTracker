const express = require('express');
const logger = require( 'morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODDB_URI || "mongod://localhost:27017/workout", {useNewUrlParser : true});
s

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}.`);
});