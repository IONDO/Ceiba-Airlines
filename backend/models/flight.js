const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    from: String,
    to: String,
    from_code: String,
    to_code: String,
    duration: String,
    luggage: {
        hand_bag: [Number],
        other_bags: [Number]
    },
    price: Number,
    tourist_seats: Number,
    tourist_reserved_seats: Number,
    first_class_seats: Number,
    first_class_reserved_seats: Number,
    departure_time: String,
    arrival_time: String,
    weekdays: [String],
});

flightSchema.index({from_code: 1, to_code: 1});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;