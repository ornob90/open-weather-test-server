require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/db/connectDB");
const cron = require("node-cron");
const updateCitiesTemperature = require("./src/cron/updateCitiesTemperature");

const server = http.createServer(app);
const port = process.env.PORT || 5000;

const main = async () => {
  await connectDB();
  //   await updateCitiesTemperature();
  server.listen(port, () => {
    console.log("listening to port ", port);
  });
};

// schedule the update temperature for every 12 hours
// 0 0,12 * * *
cron.schedule("0 0,12 * * *", async () => {
  console.log("Hitted");
  await updateCitiesTemperature();
});

main();
