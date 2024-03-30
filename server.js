const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
app.use(bodyParser.json());

const userController = require('./controller/userController')
const sportController = require('./controller/sportsController')

async function generateInitialRandomData(){
  await userController.createRandomUser();
  await sportController.generateSports();
  await sportController.generateEvents();
  await sportController.generatePosts();
}

generateInitialRandomData();

(async function () {
  const options = {
    // useNewUrlParser: true,
  };
  try {
    await mongoose.connect(process.env.dbUrl, options);
    console.log("Mongo connected at ", process.env.dbUrl);
  } catch (err) {
    console.log("db connection error", err);
  }
})();

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
