const axios = require("axios");
const { OPEN_WEATHER_BASE_URL } = require("../../config/default");

const getTodaysWeather = async (req, res, next) => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return res.status(400).send({
        message: "BAD REQUEST!!",
        status: 400,
      });
    }

    const { data: response } = await axios.get(
      OPEN_WEATHER_BASE_URL +
        `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`
    );

    if (!response) {
      return res.status(404).send({
        message: "NOT FOUND!!",
        status: 404,
      });
    }

    res.send(response);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getTodaysWeather;
