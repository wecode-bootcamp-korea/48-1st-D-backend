const express = require("express");

<<<<<<< HEAD
const threadController = require("../controllers/threadController");

const threadRouter = express.Router(); 

//글쓰기 기능
threadRouter.post("/contentup", threadController.threadCreate);
//글삭제 기능
//threadRouter.post("/thread_delete", threadController.delete);
//글수정 기능
//threadRouter.post("/threadPost_update",threadController.update);


//프로필 이미지, 닉네임 불러오기 기능
threadRouter.get("/contentin", threadController.threadShow);




module.exports = { threadRouter };
=======
module.exports = {};
>>>>>>> main
