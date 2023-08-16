require("dotenv").config();
const { router } = require("./src/routes");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use(router);

app.get("/ping", (req, res) => {
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
