const threadDao = require('../models/threadDao');

// 글 작성 성공 메시지

const threadCreate = async ( content, user_id ) => {
    await threadDao.createThread( content, user_id);
  };

//const thread_post = async (nickname, content) => {


//스레드프로필 이미지 닉네임 가져오기
const threadShow = async (nickname, porfile_image) => {
    await threadDao.showThread (nickname, porfile_image)
};




module.exports = { threadCreate, threadShow };


//module.exports = { thread_post }