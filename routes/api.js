const Workout = require("../models/index.js");
const express = require('express');
const router = express.Router();

exports.getWorkouts = async (req, res) => {
    const workouts = await Workout.find();

    res.status(200).json({
        status: 'success',
        result_num: workouts.length,
        data: workouts
    })
};

    
router
    .route('/workouts')
    .get(this.getWorkouts)

module.exports = router;