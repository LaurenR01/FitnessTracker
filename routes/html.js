const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req, res) => res.sendFile('../public/index.html'));

router
    .route('/exercise')
    .get((req, res) => res.sendFile('../public/exercise.html'));

router
    .route('/stats')
    .get((req, res) => res.sendFile('../public/stats.html'));

  module.exports = router;