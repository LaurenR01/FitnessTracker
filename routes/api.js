const {Workout} = require("../models/index");

module.exports = function(app){
    app.get('/api/workouts', (req, res) => {
        Workout.aggregate([
          {
            $addFields: {
              totalDuration: {
                $sum: '$exercises.duration',
              },
              totalDistance: {
                $sum: '$exercises.distance'
              }
            },
          },
        ]).then(dbWorkout => {
            res.json(dbWorkout);
            })
          .catch(err => {
            res.status(400).json(err);
          });
    });

    app.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then((dbWorkout) => {
                res.json(dbWorkout);
            }).catch(err => {
                res.status(400).json(err);
            });
    })
    app.put("/api/workouts/:id", ({body, params}, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: {exercises: body }},

        ).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.aggregate([
            {
                $addFields: {
                    totalDuration: {
                      $sum: '$exercises.duration',
                    },
                    totalDistance: {
                      $sum: '$exercises.distance'
                    }
                },
            }
        ]).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
    });
};