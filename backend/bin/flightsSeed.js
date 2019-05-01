const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect('mongodb+srv://Airline:Welcome123!@cluster0-lfsnm.mongodb.net/Ceiba-Air?retryWrites=true');


const Flight = require('../models/flight');


const flights = [
    {   from: "Malabo",
        to: "Annobon",
        from_code:"SSG",
        to_code:"NBN",
        duration: "55m",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 70000,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Tuesday", "Friday"]
    },

    {   from: "Annobon",
        to: "Malabo",
        from_code:"NBN",
        to_code:"SSG",
        duration: "55m",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 70000,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Tuesday", "Friday"]
    },

    {   from: "Malabo",
        to: "Bata",
        from_code:"SSG",
        to_code:"BSG",
        duration: "45m",
        luggage: {
        hand_bag: [1],
        other_bags: []
        },
        price: 27000,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,    
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Monday","Tuesday","Wednesday","Thursday", 
        "Friday", "Saturday", "Sunday"]
    },

    {   from: "Bata",
        to: "Malabo",
        from_code:"BSG",
        to_code:"SSG",
        duration: "45m",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 27000,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,  
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Monday","Tuesday","Wednesday","Thursday", 
        "Friday", "Saturday", "Sunday"]
    },

    {   from: "Malabo",
        to: "Mongomeyen",
        from_code:"SSG",
        to_code:"GEM",
        duration: "1h 10m",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 60000,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,    
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Wednesday","Friday", "Sunday"]
    },

    {   from: "Mongomeyen",
        to: "Malabo",
        from_code:"GEM",
        to_code:"SSG",
        duration: "1h 10m",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 60000,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Wednesday","Friday", "Sunday"]
    },

    {   from: "Malabo",
        to: "Duala",
        from_code:"SSG",
        to_code:"DLA",
        duration: "1h 30m",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 144200,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Monday","Tuesday","Wednesday","Thursday", 
        "Friday", "Saturday", "Sunday"]
    },

    {   from: "Duala",
        to: "Malabo",
        from_code:"DLA",
        to_code:"SSG",
        duration: "1h 30m",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 144200,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,    
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Monday","Tuesday","Wednesday","Thursday", 
        "Friday", "Saturday", "Sunday"]
    },

    {   from: "Bata",
        to: "Duala",
        from_code:"BSG",
        to_code:"DLA",
        duration: "45m",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 143100,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Monday","Tuesday","Wednesday","Thursday", 
        "Friday", "Saturday", "Sunday"]
    },

    {   from: "Duala",
        to: "Bata",
        from_code:"DLA",
        to_code:"BSG",
        duration: "45m",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 143100,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Monday","Tuesday","Wednesday","Thursday", 
        "Friday", "Saturday", "Sunday"]
    },

    {   from: "Malabo",
        to: "Libreville",
        from_code:"SSG",
        to_code:"LBV",
        duration: "1h 05min",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 161000,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Monday","Wednesday","Friday"]
    },

    {   from: "Libreville",
        to: "Malabo",
        from_code:"LBV",
        to_code:"SSG",
        duration: "1h 05min",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 161000,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,    
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Monday","Wednesday","Friday"]
    },

    {   from: "Malabo",
        to: "Cotonou",
        from_code:"SSG",
        to_code:"COO",
        duration: "3h 05min",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 210000,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Monday","Tuesday","Thursday", 
        "Saturday", "Sunday"]
    },

    {   from: "Cotonou",
        to: "Malabo",
        from_code:"COO",
        to_code:"SSG",
        duration: "3h 05min",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 210000,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,  
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Monday","Tuesday","Thursday", 
        "Saturday", "Sunday"]
    },

    {   from: "Malabo",
        to: "Madrid",
        from_code:"SSG",
        to_code:"MAD",
        duration: "6h 05min",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 250000,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Monday","Wednesday","Friday", "Sunday"]
    },

    {   from: "Madrid",
        to: "Malabo",
        from_code:"MAD",
        to_code:"SSG",
        duration: "6h 05min",
        luggage: {
            hand_bag: [1],
            other_bags: []
        },
        price: 250000,
        tourist_seats: 40,
        tourist_reserved_seats: 0,
        first_class_seats: 10,
        first_class_reserved_seats: 0,   
        departure_time: "08:30",
        arrival_time: "09:25",
        weekdays: ["Monday","Wednesday","Friday", "Sunday"]
    },

]

Flight.create(flights).then(() => process.exit())