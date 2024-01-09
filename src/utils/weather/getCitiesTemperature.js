const axios = require("axios");
const {
  GEO_LOCATION_BASE_URL,
  OPEN_WEATHER_BASE_URL,
} = require("../../config/default");

const getCitiesTemperature = async (cities = []) => {
  const results = [];

  for (const city of cities) {
    const { data: coordinates } = await axios.get(
      GEO_LOCATION_BASE_URL +
        `?q=${city}&limit=2&appid=${process.env.OPEN_WEATHER_API_KEY}`
    );

    const { lat, lon } = coordinates[0] || {};

    // console.log({ lat, lon });

    const { data: response } = await axios.get(
      OPEN_WEATHER_BASE_URL +
        `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
    );

    results.push({
      temperature: response?.main?.temp,
      city,
      lat,
      lon,
    });
  }

  return results;
};

module.exports = getCitiesTemperature;
