const bcrypt = require("bcrypt");

const userDao = require("../models/userDao");
const { validateEmail } = require("../utils/validators");

const signUp = async (email, password) => {
  validateEmail(email);

  const user = await userDao.getUserByEmail(email);

  if (user) {
    const err = new Error("duplicated email");
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await userDao.createUser(email, hashedPassword);
};

module.exports = { signUp };
