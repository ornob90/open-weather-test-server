const Weather = require("../../models/weather");

const getTemperatureOfCities = async (req, res, next) => {
  try {
    const tempOfCities = await Weather.find({});
    console.log(tempOfCities);
    if (!tempOfCities) {
      return res.status(404).send({ message: "No Data Found", status: 404 });
    }

    res.send(tempOfCities);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getTemperatureOfCities;
