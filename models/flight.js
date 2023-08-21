const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
    }
    }, {
        timestamps: true
    // destinations: [destinationSchema]
    })

// const destinationSchema = {
//     airport: {
//         type: String,
//         enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
//     },
//     arrival: Date,
// }

module.exports = mongoose.model('Flight', flightSchema);