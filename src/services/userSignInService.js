const jwt = require("jsonwebtoken");
const Dao = require('../models/userDao');
const { AppDataSource } = require("../models/data-source");

const signIn = async (email, password) => {
  const user = await Dao.getUserByEmail(email);
  if (!user) {
    const err = new Error('spenpcified user does not exist');
    err.statusCode = 404;
    throw err;
  }
  // const result = await bcrypt.compare(password, user.password);
  // const result = password !== user.password ? false : true
  const result = password !== user.password ? false : true;

  if (!result) {
    const err = new Error('invalid password');
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign({email: user.email }, process.env.JWT_SECRET);
  
};

const getUserById = async(id) => {
  const userFromId = await AppDataSource.query(`SELECT * FROM users WHERE id =?`,[id])
  return userFromId;
}

module.exports = {signIn, getUserById};