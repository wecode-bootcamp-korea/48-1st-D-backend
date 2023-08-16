const jwt = require('jsonwebtoken');
const userService = require('../services/userSignInService');

const loginRequired = async (req, res, next) => {
  try {
    
    const accessToken = req.headers.authorization;

    if (!accessToken) {
      const error = new Error('NEED_ACCESS_TOKEN');
      error.statusCode = 401;

      return res.status(error.statusCode).json({ message: error.message });

    }

    const payload = await jwt.verify(accessToken, process.env.JWT_SECRET);

    const email = await userService.getEmailById(payload.id);

    if (!email) {
      const error = new Error('USER_DOES_NOT_EXIST');
      error.statusCode = 404;

      return res.status(error.statusCode).json({ message: error.message });
    }


    
    req.email = email;

    next();

  } catch {
    const error = new Error('INVALID_ACCESS_TOKEN');
    error.statusCode = 401;

    return res.status(error.statusCode).json({ message: error.message });
  }
};


module.exports = { loginRequired };

