const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationsSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String,
        default: 'DEN',
        enum: ['BTR', 'AUS', 'LAX']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            const today = new Date()
            return today.setFullYear(today.getFullYear() + 1)
        }
    },
    destinations: [destinationsSchema]
},
{
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);