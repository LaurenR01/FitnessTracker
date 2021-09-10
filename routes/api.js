const Workout = require("../models/index.js");
const express = require('express');
const router = express.Router();

router
    .route('/workouts')
    .get()

module.exports = router;