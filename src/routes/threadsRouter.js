const express = require("express");
const { threadsList } = require("../controllers/threadController");
const { dataInitialize } = require("../models/data-source");
const threadRouter = express.Router();

threadRouter.use("/list", dataInitialize);
threadRouter.get("/list", threadsList);
module.exports = { threadRouter };
