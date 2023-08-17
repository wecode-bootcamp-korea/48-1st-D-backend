const bcrypt = require("bcrypt");
const userDao = require("../models/userDao");
const jwt = require('jsonwebtoken')
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

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);
  if (!user) {
    const err = new Error('spenpcified user does not exist');
    err.statusCode = 404;
    throw err;
  }
  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    const err = new Error('invalid password');
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign({email: user.email }, process.env.JWT_SECRET);
  
};


module.exports = { signUp, signIn };
