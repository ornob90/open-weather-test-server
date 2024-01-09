const { getTemperatureOfCities } = require("../../api/weather");

const router = require("express").Router();

router.get("/api/cities-temp", getTemperatureOfCities);

module.exports = router;
