const { AppDataSource } = require("./data-source");

const createThread = async(content, user_id) => { 
    await AppDataSource.query(
    `
    INSERT INTO threads (
        content,
        user_id
    ) VALUES (
        ?, ?
    )
    `,
    [ content, user_id]
    );
};

const showThread = async (user_id) => {
      await AppDataSource.query(
      `
      SELECT 
      nickname, porfile_image FROM users
      WHERE id = ?
      `,
      [user_id]
    );
  };

module.exports = { createThread, showThread };


//데이터를 빼내서 보여주기 하는 작업
/* const getContent = async (nickname, content, created_at)
=>{
    const = await AppDataSource.query(
        `
        SELECT content, nickname, create_at
        FROM thread
        WHERE id=#{num}
        `,
        [nickname, content, created_at]
    );
}

odule.exports = { insertContent, getContent };
 */