const express = require("express");
const {signIn} = require("../controllers/userController");
const router = express.Router();

router.use('/signIn', signIn)
module.exports = {router};
