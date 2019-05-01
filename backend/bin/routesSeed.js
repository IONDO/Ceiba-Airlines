const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect('mongodb+srv://Airline:Welcome123!@cluster0-lfsnm.mongodb.net/Ceiba-Air?retryWrites=true');


const Route = require('../models/route');


const routes = [{
        from: {
            code: "SSG",
            name: "Malabo"
        },
        to: [{
                code: "NBN",
                name: "Annobon"
            },
            {
                code: "BSG",
                name: "Bata"
            },
            {
                code: "GEM",
                name: "Mongomeyen"
            },
            {
                code: "DLA",
                name: "Douala"
            },
            {
                code: "LBV",
                name: "Libreville"
            },
            {
                code: "COO",
                name: "Cotonou"
            },
            {
                code: "MAD",
                name: "Madrid"
            }
        ]
    },

    {
        from: {
            code: "NBN",
            name: "Annobon"
        },
        to: [{
            code: "SSG",
            name: "Malabo"
        }]
    },

    {
        from: {
            code: "BSG",
            name: "Bata"
        },
        to: [{
                code: "SSG",
                name: "Malabo"
            },
            {
                code: "DLA",
                name: "Duala"
            }
        ]
    },

    {
        from: {
            code: "GEM",
            name: "Mongomeyen"
        },
        to: [{
            code: "SSG",
            name: "Malabo"
        }]
    },

    {
        from: {
            code: "DLA",
            name: "Douala"
        },
        to: [{
                code: "SSG",
                name: "Malabo"
            },
            {
                code: "BSG",
                name: "Bata"
            }
        ]
    },

    {
        from: {
            code: "LBV",
            name: "Libreville"
        },
        to: [{
            code: "SSG",
            name: "Malabo"
        }]
    },

    {
        from: {
            code: "COO",
            name: "Cotonou"
        },
        to: [{
            code: "SSG",
            name: "Malabo"
        }]
    },

    {
        from: {
            code: "MAD",
            name: "Madrid"
        },
        to: [{
            code: "SSG",
            name: "Malabo"
        }]
    }
]

Route.create(routes).then(() => process.exit())