const express = require('express');
const logger = require( 'morgan');
const mongoose = require('mongoose');

const Workout = require('./models/index');

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static("public"));

require('./routes/api')(app);
require('./routes/html')(app);

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