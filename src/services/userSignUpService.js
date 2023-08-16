const bcrypt = require("bcrypt");

const userDao = require("../models/userDao");
const { validateEmail } = require("../utils/validators");

const signUp = async (
  email,
  password,
  nickname,
  phone_number,
  birthday,
  profile_image
) => {
  validateEmail(email);

  const user = await userDao.getUserByEmail(email);

  if (user) {
    const err = new Error("duplicated email");
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await userDao.createUser(
    email,
    hashedPassword,
    nickname,
    phone_number,
    birthday,
    profile_image
  );
};

module.exports = { signUp };
