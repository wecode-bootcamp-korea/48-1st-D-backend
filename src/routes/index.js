const express = require("express");

const { userRouter } = require("./userRouter");

// const { threadRouter } = require("./threadRouter");

const routes = express.Router();

routes.use("/user", userRouter);

module.exports = { routes };
