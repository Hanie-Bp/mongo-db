const dotenv = require("dotenv");
dotenv.config()

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connectDB");


const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const logger = require('./src/middlewares/logger')

app.use(express.json(),logger ,express.urlencoded({ extended: true }), cors());


app.use('/member',require('./src/routes/member.route'))


app.use("*", (req, res) => {
  res.sendStatus(404);
});


const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server is runing on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
