const { CITIES } = require("../config/default");
const Weather = require("../models/weather");
const getCitiesTemperature = require("../utils/weather/getCitiesTemperature");

const updateCitiesTemperature = async () => {
  try {
    const result = await getCitiesTemperature(CITIES);

    const response = await Weather.updateOne(
      {},
      {
        $set: {
          cities_temp: result,
          updatedAt: new Date(),
        },
      },
      { upsert: true } // This option creates the document if it doesn't exist
    );
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = updateCitiesTemperature;
