const express = require("express");
const userRouter = require("./userRouter");
const threadRouter = require("./threadRouter");
const validateToken = require("../utils/validateToken");

const router = express.Router();

router.use("/thread", validateToken, threadRouter);

module.export = { router };
