const express = require('express');
const axios = require('axios');

const unit = 'metric';

const http = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});
http.interceptors.request.use((e) => {
  e.url = `${e.url}&units=${unit}&appid=${process.env.API_KEY}`;
  return e;
});

const cache = new Map();

const router = express.Router();

router.post('/', async (req, res, next) => {
  const key = `${JSON.stringify(req.body)}current`;
  if (cache.has(key)) {
    const { data, timestamp } = cache.get(key);
    const expiresIn = Date.now() - timestamp;
    if (expiresIn < 600000) {
      res.json(data);
      return;
    }
  }
  const { lat, lon } = req.body;
  if (lat && lon) {
    http
      .get(`weather?lat=${lat}&lon=${lon}`)
      .then((r) => {
        cache.set(key, { data: r.data, timestamp: Date.now() });
        res.json(r.data);
      })
      .catch((e) => {
        res.statusCode = 500;
        next(new Error(e.response.data.message));
      });
  } else {
    res.statusCode = 422;
    next(new Error('Latitude and longitude'));
  }
});

router.post('/forecast', async (req, res, next) => {
  const { city, state, country } = req.body;
  if (city && state && country) {
    http
      .get(`forecast?q=${city},${state},${country}`)
      .then((r) => res.json(r.data))
      .catch((e) => {
        res.statusCode = 500;
        next(new Error(e.response.data.message));
      });
  } else {
    res.statusCode = 422;
    next(new Error('city,state,country required'));
  }
});

router.post('/onecall', async (req, res, next) => {
  const key = `${JSON.stringify(req.body)}oneCall`;
  if (cache.has(key)) {
    const { data, timestamp } = cache.get(key);
    const expiresIn = Date.now() - timestamp;
    if (expiresIn < 600000) {
      res.json(data);
      return;
    }
  }
  const { lat, lon } = req.body;
  if (lat && lon) {
    http
      .get(`onecall?lat=${lat}&lon=${lon}`)
      .then((r) => {
        cache.set(key, { data: r.data, timestamp: Date.now() });
        res.json(r.data);
      })
      .catch((e) => {
        res.statusCode = 500;
        next(new Error(e.response.data.message));
      });
  } else {
    res.statusCode = 422;
    next(new Error('Lat and long required'));
  }
});

module.exports = router;
