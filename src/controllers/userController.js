const userSignUpService = require("../services/userSignUpService");

const signUp = async (req, res) => {
  try {
    const { email, password, nickname, phoneNumber, birthday, profileImage } =
      req.body;
    await userSignUpService.signUp(
      email,
      password,
      nickname,
      phoneNumber,
      birthday,
      profileImage
    );

    res.status(201).end();
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { signUp };
