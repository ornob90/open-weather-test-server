const cities = require("./cities-name");

require("dotenv").config();

const config = {
  LOCAL_CLIENT: process.env.LOCAL_CLIENT,
  CLIENT: process.env.CLIENT,
  OPEN_WEATHER_BASE_URL: "https://api.openweathermap.org",
  GEO_LOCATION_BASE_URL: "https://api.openweathermap.org/geo/1.0/direct",
  CITIES: cities,
};

module.exports = Object.freeze(config);

// try {

// } catch (error) {
//   console.log(error.message);
//   next(error);
// }
