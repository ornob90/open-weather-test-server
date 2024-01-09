const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  cities_temp: [
    {
      temperature: {
        type: Number,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      lat: {
        type: Number,
        required: true,
      },
      lon: {
        type: Number,
        required: true,
      },
    },
  ],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;
