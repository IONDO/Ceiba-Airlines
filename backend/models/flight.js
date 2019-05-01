const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    fly_from: String,
    fly_to: String,
    fly_from_code: String,
    fly_to_code: String,
    fly_duration: String,
    fly_luggage: {
        hand_bag: [Number],
        other_bags: [Number]
    },
    fly_price: Number,
    fly_tourist_seats: Number,
    fly_tourist_reserved_seats: Number,
    fly_first_class_seats: Number,
    fly_first_class_reserved_seats: Number,
    departure_time: String,
    arrival_time: String,
    weekly_flights: [String],
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;