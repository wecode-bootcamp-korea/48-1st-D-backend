const express = require("express");
const {router} = require("./userRouter");

const routes = express.Router();

routes.use('/user', router)

module.exports = { routes };
