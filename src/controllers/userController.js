const usersignIn = require("../services/userSignInService")

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    const accessToken = await usersignIn.signIn(email, password);
  
    res.status(200).json({ accessToken: accessToken });
  } 
  catch (err) {
    res.status(401).json({ message: err.message });

  }
};

module.exports = {signIn};
