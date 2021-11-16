const express = require('express');
const router = express.Router();
const Analytics = require('../models/Analytics');

router.post('/', (req,res) => {
    const analytic = new Analytics({
        FCPTime:  req.body.FCPTime,
        TTFBTime:  req.body.TTFBTime,
        domLoadTime:  req.body.domLoadTime,
        windowLoadTime:  req.body.windowLoadTime,
        resourceLoadTime:  req.body.resourceLoadTime,
    });
    analytic.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});

module.exports = router;