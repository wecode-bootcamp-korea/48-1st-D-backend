// const threadPostService = require("../services/threadPostService");
const threadService = require("../services/threadPostService");

const threadCreate = async (req, res) => {
 try {
  const [userData] = req.user
  const userId = userData.id
    const { content } = req.body;
    
    await threadService.threadCreate( content, userId );

    res.status(201).end();
 }catch (err) {
    res.status(err.statusCode || 400). json({ message: err.message});
 }
};

const showProfileAndNickname = async (req, res) => {
    try {
        const [userData] = req.user
        const userNickname = userData.nickname
        const userProfileImage = userData.profile_image

        res.status(200).json({ nicknmae: userNickname, profileImage: userProfileImage });
    } catch (err) {
      res.status(err.statusCode || 401).json({ message: err.message });  
    }
};

module.exports = { threadCreate, showProfileAndNickname };

