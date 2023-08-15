const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    next(err);
    res.json({ message: err });
  }
};
exports.module = { validateToken };
