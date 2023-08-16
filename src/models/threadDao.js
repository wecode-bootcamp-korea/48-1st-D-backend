const express = require("express");
const { AppDataSource } = require("./data-source.js");

const list = async () => {
  const threads = await AppDataSource.query(
    `SELECT
          t.content,
          t.created_at,
          t.updated_at,
          u.nickname
        FROM threads t
        INNER JOIN users u ON t.user_id = u.id `
  );
  return threads;
};
module.exports = { list };
