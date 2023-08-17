const threadDao = require('../models/threadDao');

const threadCreate = async ( content, userId ) => {
    await threadDao.createThread( content, userId);
  };

module.exports = { threadCreate };