const mongoose = require('mongoose');

const AnalyticsSchema = mongoose.Schema({
    FCPTime: {
        type: Number,
        required: true,
    },
    TTFBTime: {
        type: Number,
        required: true,
    },
    domLoadTime: {
        type: Number,
        required: true,
    },
    windowLoadTime: {
        type: Number,
        required: true,
    },
    resourceLoadTime: {
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);