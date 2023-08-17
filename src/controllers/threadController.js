const express = require("express");
const { lookUp } = require("../services/theradListService");
const threadsList = async (req, res) => {
  try {
    res.json(await lookUp(req, res));
  } catch (err) {
    return res.json({ message: err.message });
  }
};
//req로 현재 사용자 정보 받아오고, 보려는 thread id 받고 (mysql select 쿼리로 조회하는 함수 서비스에서 받아다가 샤용)
//토큰 확인하고(토큰 확인 함수는 서비스에 새로 하나 파 넣자)
//get method로 db에 저장된 자료들을 res로 보내기
module.exports = { threadsList };
