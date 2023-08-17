const express = require("express");
const { AppDataSource } = require("./data-source.js");

const list = async (id) => {
  const threads = await AppDataSource.query(
    `SELECT
          t.content,
          t.created_at,
          t.updated_at,
          u.nickname,
          u.profile_image,
          CASE WHEN user_id = ? THEN TRUE ELSE FALSE END AS isMyPost
        FROM threads t
        INNER JOIN users u ON t.user_id = u.id`,
    [id]
  );
  return threads;
};

module.exports = { list };
