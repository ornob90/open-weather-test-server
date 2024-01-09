require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/db/connectDB");
const cron = require("node-cron");
const addCitiesTemperature = require("./src/cron/addCitiesTemperature");

const server = http.createServer(app);
const port = process.env.PORT || 5000;

const main = async () => {
  await connectDB();

  server.listen(port, () => {
    console.log("listening to port ", port);
  });
};

cron.schedule("*/1 * * * * ", async () => {
  //   await addCitiesTemperature();
});

main();
