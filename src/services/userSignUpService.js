const bcrypt = require("bcrypt");
const userDao = require("../models/userDao");
const { validateEmail } = require("../utils/validators");

const signUp = async (
  email,
  password,
  nickname,
  phoneNumber,
  birthday,
  profileImage
) => {
  validateEmail(email);

  const user = await userDao.getUserByEmail(email);

  if (user) {
    const err = new Error("duplicated email");
    err.statusCode = 400;
    throw err;
  }
  const saltRounds = process.env.SALT_ROUNDS;

  const hashedPassword = await bcrypt.hash(password, parseInt(saltRounds));
  await userDao.createUser(
    email,
    hashedPassword,
    nickname,
    phoneNumber,
    birthday,
    profileImage
  );
};

module.exports = { signUp };
