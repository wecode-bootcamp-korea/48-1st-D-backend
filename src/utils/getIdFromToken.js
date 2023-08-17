const jwt = require("jsonwebtoken");

const getIdFromToken = async (req, res) => {
  const token = req.headers.authorization;
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  return payload.id;
};

module.exports = { getIdFromToken };
