const express = require('express');
const router = express.Router();
const moment = require('moment');
const Flight = require('../models/flight');
const Route = require('../models/route');
const Trip = require('../models/trip');

router.get('/', (req, res, next) => {
  Route.find({})
    .then(routes => {
      res.status(200).json({ routes })
    })
    .catch(next)
})

router.get('/search', (req, res, next) => {
  const from = req.query.from || { $exists: true }
  const to = req.query.to || { $exists: true }
  const departWeekday = req.query.depart 
    ? moment(req.query.depart, 'DD/MM/YYYY').format("dddd")
    : { $exists: true }
  Flight.find({ from_code: from, to_code: to, weekdays: departWeekday })
    .then(flights => {
      res.status(200).json({ flights })
    })
    .catch(next)
})

router.post('/search',async (req, res, next) => {
    const { outbound, inbound } = req.body;
        const newTrip = await Trip.create({ outbound, inbound });
        res.status(200).json(newTrip);
})

module.exports = router;
