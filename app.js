const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())
const helmet = require("helmet");
app.use(helmet());
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