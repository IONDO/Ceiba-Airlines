const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    from: String,
    from_code: String,
    to: String,
    to_code: String,
    duration: String,
    departure_date: String,
    departure_time: String,
    arrival_date: String,
    arrival_time: String,
    price: Number
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;