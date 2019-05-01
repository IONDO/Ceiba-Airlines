const express = require('express');
const router = express.Router();
const Flight = require('../models/flight');
const Route = require('../models/route')


router.get('/', (req, res, next) => {
  Route.find({})
    .then(routes => {
      res.status(200).json({ routes })
    })
    .catch(next)
})

router.get('/search', (req, res, next) => {
  Flight.find({})
    .then(flights => {
      res.status(200).json({ flights })
    })
    .catch(next)
})

module.exports = router;
