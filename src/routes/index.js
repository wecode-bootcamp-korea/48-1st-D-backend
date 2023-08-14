const express = require("express");
const userRouter = require("./userRouter");
const threadRouter = require("./threadRouter");

const router = express.Router();

module.export = { router };
