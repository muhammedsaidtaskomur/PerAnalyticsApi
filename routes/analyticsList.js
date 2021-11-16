const express = require('express');
const router = express.Router();
const Analytics = require('../models/Analytics');

router.post('/', async (req,res) => {
    const thirtyMinutes = 1000 * 60 * 30;
    startDate = Date.now() - thirtyMinutes;
    if (req.body.isLast30Minutes) {
      condition = {
        date: {
          $gte: new Date(startDate),
        },
      };
    }
    const results = await Analytics.find(condition);
    return res.json(results);
});

module.exports = router;