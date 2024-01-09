const { getTemperatureOfCities } = require("../../api/weather");
const getTodaysWeather = require("../../api/weather/getTodaysWeather");

const router = require("express").Router();

// GET
router.get("/api/cities-temp", getTemperatureOfCities);
router.get("/api/todays-weather", getTodaysWeather);

module.exports = router;
