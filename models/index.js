const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
   type: {
       type: String,
       trim: true,
       required: true
   },
   name: {
        type: String,
        trim: true,
        required: true
   },
   duration: Number,
   distance: Number,
   weight: Number,
   reps: Number,
   sets: Number
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;