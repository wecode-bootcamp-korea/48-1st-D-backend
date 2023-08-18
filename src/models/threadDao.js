const { AppDataSource } = require("./data-source");

const createThread = async (content, userId) => {
  await AppDataSource.query(
    `
    INSERT INTO threads (
        content,
        user_id
    ) VALUES (
        ?, ?
    )
    `,
    [content, userId]
  );
};

const threadsList = async (id) => {
  const threads = await AppDataSource.query(
    `SELECT t.id AS postId,
      u.nickname AS userName,
      u.profile_image AS profileImage,
      t.content,
      CASE WHEN (l.id IS NOT NULL) THEN 'true' ELSE 'false' END AS isLiked,
      IFNULL(c.likeCount,0) AS likeCount,
      t.created_At
    FROM threads t 
    LEFT JOIN users u ON t.user_id = u.id
    LEFT JOIN likes l ON l.thread_id = t.id AND l.user_id = ?
    LEFT JOIN (SELECT COUNT(thread_id) AS likeCount, thread_id FROM likes GROUP BY thread_id) c ON c.thread_id = t.id
    `,
    [id]
  );
  return threads;
};

module.exports = { createThread, threadsList };
