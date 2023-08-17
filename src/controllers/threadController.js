// const threadPostService = require("../services/threadPostService");
const threadService = require("../services/threadPostService");

const threadCreate = async (req, res) => {
 try {
    const { content,user_id } = req.body;
    
    await threadService.threadCreate( content,user_id ); //res.를 req로 수정했습니다

    res.status(201).end();
 }catch (err) {
    res.status(err.statusCode || 400). json({ message: err.message});
 }
};

const threadShow = async (req, res) => {
    try {
        const { nickname, porfile_image } = req.body;

        await threadService.threadShow( nickname, porfile_image );

        res.status(200).json({ message : 'show thread!' });
    } catch (err) {
      res.status(err.statusCode || 401).json({ message: err.message });  
    }
};


module.exports = { threadCreate, threadShow };

