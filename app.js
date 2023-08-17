require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { routes } = require("./src/routes")
const {AppDataSource} = require("./src/models/data-source")

const app = express();

AppDataSource.initialize()
 .then(() => {
  console.log("Data Source has been initiallized!")
 })


app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.use(routes);

app.get("/ping", (req, res, next) => {
  res.status(200).json({ message: "pong" });
});

const startServer = async () => {
  const PORT = process.env.PORT;
  try {
    app.listen(PORT, () => {
      console.log(`Listening on Port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
