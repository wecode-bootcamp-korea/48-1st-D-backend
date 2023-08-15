const express = require("express");
const { AppDataSource } = require("./data-source.js");

const lookUpThreadList = async (req, res) => {
  await AppdDataSource.query(
    `SELECT
        t.content,
        t.created_at,
        t.updated_at,
        u.nickcname
      FROM threads t
      INNER JOIN users u ON t.user_id = u.id `
  );
};
