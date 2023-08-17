const express = require("express");
const { userRouter } = require("./userRouter");
const { threadRouter } = require("./threadsRouter");

const routes = express.Router();


routes.use("/user", userRouter);
routes.use("/thread", threadRouter)

module.exports = { routes };
