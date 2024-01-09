const getCitiesTemperature = require("../utils/weather/getCitiesTemperature");

const addCitiesTemperature = async (cities) => {
  const result = await getCitiesTemperature(cities);

  console.log(result);
};

module.exports = addCitiesTemperature;
