const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors({ origin: "https://per-analytics-api.herokuapp.com", credentials: true }))
const analyticsRoute =  require('./routes/analytics');
app.use('/analytics',analyticsRoute)
const analyticsListRoute =  require('./routes/analyticsList');
app.use('/analyticsList',analyticsListRoute)


// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => { console.log("connected to DB!"); }
);
app.listen(4000);