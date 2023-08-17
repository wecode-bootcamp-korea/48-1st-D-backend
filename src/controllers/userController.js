const userService = require("../services/userService");

const signUp = async (req, res) => {
  try {
    const { email, password, nickname, phoneNumber, birthday, profileImage } =
      req.body;
    await userService.signUp(
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

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    const accessToken = await userService.signIn(email, password);
  
    res.status(200).json({ accessToken: accessToken });
  } 
  catch (err) {
    res.status(401).json({ message: err.message });

  }
};

module.exports = {signUp,signIn};
