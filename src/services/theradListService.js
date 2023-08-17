const { threadsList } = require("../models/threadDao");

const lookUp = async (req, res) => {
  // console.log(req.user);
  const id = req.user.id;
  const reverse = (await threadsList(id)).reverse();
  return reverse;
};
module.exports = { lookUp };
