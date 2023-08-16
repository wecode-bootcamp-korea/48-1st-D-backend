const express = require("express");
const { list } = require("../models/threadDao");

const lookUp = async () => {
  const reverse = (await list()).reverse();
  return reverse;
};
module.exports = { lookUp };
