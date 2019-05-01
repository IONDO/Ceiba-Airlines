const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    from: {
        code: String,
        name: String
    },
    to: [{
        code: String,
        name: String
    }],
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;