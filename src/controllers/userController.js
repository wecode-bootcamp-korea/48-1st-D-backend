// const express = require("express");
const userSignUpService = require("../services/userSignUpService");

const signUp = async (req, res) => {
  try {
    const { email, password, nickname, phone_number, birthday, profile_image } =
      req.body;
    await userSignUpService.signUp(
      email,
      password,
      nickname,
      phone_number,
      birthday,
      profile_image
    );

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { signUp };
