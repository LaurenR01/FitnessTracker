const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req, res) => res.sendFile(path.join(__dirname,'../public/index.html')));

router
    .route('/exercise')
    .get((req, res) => res.sendFile(path.join(__dirname,'../public/exercise.html')));

router
    .route('/stats')
    .get((req, res) => res.sendFile(path.join(__dirname,'../public/stats.html')));

  module.exports = router;