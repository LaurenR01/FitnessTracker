    const {Workout} = require("../models/index");
const express = require('express');
const router = express.Router();


const getWorkouts = async (req, res) => {
    let workouts = await Workout.find();

    res.status(200).json({
        status: 'success',
        result_num: workouts.length,
        data: workouts
    })
};
    
router
    .route('/workouts')
    .get(getWorkouts)

module.exports = router;