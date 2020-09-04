const express = require('express');

const weather = require('./weather');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'WEATHER API - 👋🌎🌍🌏',
  });
});

router.use('/weather', weather);

module.exports = router;
