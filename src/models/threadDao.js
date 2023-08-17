const { AppDataSource } = require("./data-source");

const createThread = async(content, userId) => { 
    await AppDataSource.query(
    `
    INSERT INTO threads (
        content,
        user_id
    ) VALUES (
        ?, ?
    )
    `,
    [ content, userId]
    );
};

module.exports = { createThread};