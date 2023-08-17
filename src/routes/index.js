const express = require("express");
const userRouter = require("./userRouter");
const { threadRouter } = require("./threadsRouter");
const { loginRequired } = require("../utils/tokenValidate");

const router = express.Router();

router.use("/thread", threadRouter);
router.get("/thread", loginRequired);

module.exports = { router };
