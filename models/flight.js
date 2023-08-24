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
        enum: ['BTR', 'AUS', 'LAX', 'DEN']
    },
    flightNo: {
        required: true,
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

flightSchema.statics.getCreationData = function() {
    const airport = this.schema.path('airport').enumValues
    const airline = this.schema.path('airline').enumValues
    return {
        airport,
        airline
    }
}

module.exports = mongoose.model('Flight', flightSchema);