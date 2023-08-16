const jwt = require("jsonwebtoken");
const Dao = require('../models/userDao');
const { AppDataSource } = require("../models/data-source");

const signIn = async (email, password) => {
  const user = await Dao.getUserByEmail(email);
  if (!user) {
    const err = new Error('specified user does not exist');
    err.statusCode = 404;
    throw err;
  }

  // const result = password !== user.password ? false : true
  const result = password !== user.password ? false : true;

  if (!result) {
    const err = new Error('invalid password');
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET);
  
};

const getEmailById = async(id) => {
  const emailFromId = await AppDataSource.query(`SELECT email FROM users WHERE id =?`,[id])
  return emailFromId.email;
}

module.exports = {signIn, getEmailById};