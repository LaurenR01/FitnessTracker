const express = require('express');
const logger = require( 'morgan');
const mongoose = require('mongoose');
const routeIndex = require("./routes/index");

const db = require('./models');

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static("public"));

app.use('/', routeIndex);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log("Database successfully connected")
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}.`);
});