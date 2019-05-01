const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect('mongodb+srv://Airline:Welcome123!@cluster0-lfsnm.mongodb.net/Ceiba-Air?retryWrites=true');


const Flight = require('../models/flight');


const flights = [
    {   fly_from: "Malabo",
        fly_to: "Annobon",
        fly_from_code:"SSG",
        fly_to_code:"NBN",
        fly_duration: "55m",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 70000,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Tuesday", "Friday"]
    },

    {   fly_from: "Annobon",
        fly_to: "Malabo",
        fly_from_code:"NBN",
        fly_to_code:"SSG",
        fly_duration: "55m",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 70000,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Tuesday", "Friday"]
    },

    {   fly_from: "Malabo",
        fly_to: "Bata",
        fly_from_code:"SSG",
        fly_to_code:"BSG",
        fly_duration: "45m",
        fly_luggage: {
        hand_bag: [1],
        other_bags: []
        },
        fly_price: 27000,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,    
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Monday","Tuesday","Wednesday","Thursday", 
        "Friday", "Saturday", "Sunday"]
    },

    {   fly_from: "Bata",
        fly_to: "Malabo",
        fly_from_code:"BSG",
        fly_to_code:"SSG",
        fly_duration: "45m",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 27000,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,  
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Monday","Tuesday","Wednesday","Thursday", 
        "Friday", "Saturday", "Sunday"]
    },

    {   fly_from: "Malabo",
        fly_to: "Mongomeyen",
        fly_from_code:"SSG",
        fly_to_code:"GEM",
        fly_duration: "1h 10m",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 60000,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,    
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Wednesday","Friday", "Sunday"]
    },

    {   fly_from: "Mongomeyen",
        fly_to: "Malabo",
        fly_from_code:"GEM",
        fly_to_code:"SSG",
        fly_duration: "1h 10m",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 60000,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Wednesday","Friday", "Sunday"]
    },

    {   fly_from: "Malabo",
        fly_to: "Duala",
        fly_from_code:"SSG",
        fly_to_code:"DLA",
        fly_duration: "1h 30m",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 144200,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Monday","Tuesday","Wednesday","Thursday", 
        "Friday", "Saturday", "Sunday"]
    },

    {   fly_from: "Duala",
        fly_to: "Malabo",
        fly_from_code:"DLA",
        fly_to_code:"SSG",
        fly_duration: "1h 30m",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 144200,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,    
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Monday","Tuesday","Wednesday","Thursday", 
        "Friday", "Saturday", "Sunday"]
    },

    {   fly_from: "Bata",
        fly_to: "Duala",
        fly_from_code:"BSG",
        fly_to_code:"DLA",
        fly_duration: "45m",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 143100,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Monday","Tuesday","Wednesday","Thursday", 
        "Friday", "Saturday", "Sunday"]
    },

    {   fly_from: "Duala",
        fly_to: "Bata",
        fly_from_code:"DLA",
        fly_to_code:"BSG",
        fly_duration: "45m",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 143100,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Monday","Tuesday","Wednesday","Thursday", 
        "Friday", "Saturday", "Sunday"]
    },

    {   fly_from: "Malabo",
        fly_to: "Libreville",
        fly_from_code:"SSG",
        fly_to_code:"LBV",
        fly_duration: "1h 05min",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 161000,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Monday","Wednesday","Friday"]
    },

    {   fly_from: "Libreville",
        fly_to: "Malabo",
        fly_from_code:"LBV",
        fly_to_code:"SSG",
        fly_duration: "1h 05min",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 161000,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,    
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Monday","Wednesday","Friday"]
    },

    {   fly_from: "Malabo",
        fly_to: "Cotonou",
        fly_from_code:"SSG",
        fly_to_code:"COO",
        fly_duration: "3h 05min",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 210000,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Monday","Tuesday","Thursday", 
        "Saturday", "Sunday"]
    },

    {   fly_from: "Cotonou",
        fly_to: "Malabo",
        fly_from_code:"COO",
        fly_to_code:"SSG",
        fly_duration: "3h 05min",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 210000,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,  
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Monday","Tuesday","Thursday", 
        "Saturday", "Sunday"]
    },

    {   fly_from: "Malabo",
        fly_to: "Madrid",
        fly_from_code:"SSG",
        fly_to_code:"MAD",
        fly_duration: "6h 05min",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 250000,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Monday","Wednesday","Friday", "Sunday"]
    },

    {   fly_from: "Madrid",
        fly_to: "Malabo",
        fly_from_code:"MAD",
        fly_to_code:"SSG",
        fly_duration: "6h 05min",
        fly_luggage: {
            hand_bag: [1],
            other_bags: []
        },
        fly_price: 250000,
        fly_tourist_seats: 40,
        fly_tourist_reserved_seats: 0,
        fly_first_class_seats: 10,
        fly_first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekly_flights: ["Monday","Wednesday","Friday", "Sunday"]
    },

]

Flight.create(flights).then(() => process.exit())