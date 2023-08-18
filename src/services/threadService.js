const threadDao = require("../models/threadDao");

const threadCreate = async (content, userId) => {
  await threadDao.createThread(content, userId);
};

const lookUp = async (req, res) => {
  const [userData] = req.user;
  const id = userData.id;
  const reverse = (await threadDao.threadsList(id)).reverse();
  return reverse;
};
module.exports = { threadCreate, lookUp };
