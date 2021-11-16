const mongoose = require('mongoose');

const AnalyticsListSchema = mongoose.Schema({
    isLast30Minutes: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model('AnalyticsList', AnalyticsListSchema);